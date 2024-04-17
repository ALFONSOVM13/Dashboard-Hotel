/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../TextInput";
import UserFormButtons from "./UserFormButtons";
import FormTitle from "../../FormTittle";
import SelectInput from "../../SelectInput";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import { ErrorMessage } from "formik";
import { Field } from "formik";
import ImageInput from "../../ImageInput";
import DateInput from "../../DateInput";
import { postUser } from "../../../redux/Users/Actions/actions";
import { useNavigate } from "react-router-dom";

function UserForm({ id, userToEdit }) {
  const navigate = useNavigate();

  const [photoUrl, setPhotoUrl] = useState("");
  const [showImageInput, setShowImageInput] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "uLmMbkZBbbL5ExZ2xmGYWb-qORHjJ8fBy3RMmMfB3KEyCnLhMabei7gl53LhaxMmKm4",
        "user-email": "tomy_ramos1991@yahoo.com.ar",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const authToken = data.auth_token;
        fetch("https://www.universal-tutorial.com/api/countries", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const countryNames = data.map((item) => item.country_name);
            countryNames.unshift("---");
            setCountries(countryNames);
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSubmit = async (values) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.error("No se encontró el token en las cookies");
        return;
      }
      const requestData = {
        userId: userToEdit.id,
        full_name: values.full_name,
        phone_number: values.phone_number,
        gender: values.gender,
        document: values.document,
        country: values.country,
        birth: values.birth,
        address: values.address,
      };

      if (selectedFile) {
        requestData.photo = selectedFile;
      }

      const response = await postUser(token, userToEdit.id, requestData);
      Swal.fire(`${response.message}`, "", "success");
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoUrl(reader.result);
      setShowImageInput(false);
      setFieldValue("photo_url", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <FormTitle title="EDIT AN USER" />
      <Formik
        initialValues={{
          full_name: userToEdit.guest_profile
            ? userToEdit.guest_profile.full_name
            : "",
          phone_number: userToEdit.guest_profile
            ? userToEdit.guest_profile.phone_number
            : "",
          document: userToEdit.guest_profile
            ? userToEdit.guest_profile.document
            : "",
          country: userToEdit.guest_profile
            ? userToEdit.guest_profile.country
            : "",
          address: userToEdit.guest_profile
            ? userToEdit.guest_profile.address
            : "",
          photo_url: userToEdit.guest_profile
            ? userToEdit.guest_profile.photo_url
            : photoUrl,
          gender: userToEdit.guest_profile
            ? userToEdit.guest_profile.gender
            : "",
          birth: userToEdit.guest_profile ? userToEdit.guest_profile.birth : "",
        }}
        validationSchema={Yup.object().shape({
          full_name: Yup.string()
            .required("The name is required.")
            .matches(
              /^[A-Za-z\u00C0-\u024F\s']*$/,
              "Invalid characters in the name."
            )
            .max(50, "The name cannot have more than 50 characters."),

          document: Yup.string().required("The ID is required."),
          country: Yup.string().required("The country is required."),
          phone_number: Yup.string()
            .required("The phone number is required.")
            .matches(
              /^\+(?:[0-9] ?){6,14}[0-9]$/,
              "Invalid phone number format."
            )
            .max(20, "The phone number cannot have more than 20 characters."),
          address: Yup.string()
            .required("The address is required.")
            .max(100, "The address cannot have more than 100 characters."),
          photo_url: Yup.string().required("The photo is required."),
          gender: Yup.string()
            .required("The gender is required.")
            .notOneOf(["---"], "Please select a valid gender."),
          birth: Yup.date()
            .required("Birthday is required.")
            .max(new Date(), "Birthday cannot be in the future."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          Swal.fire({
            title: "Warning",
            text: "Are you sure you want to create this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((response) => {
            if (response.isConfirmed) {
              handleSubmit(values);
            } else if (response.isDismissed) {
              return;
            }
          });
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  src={values.photo_url}
                  className="self-center max-w-full object-cover rounded-full border-2 border-solid aspect-square dark:border-white border-black border-opacity-30 w-[174px]"
                />
                <button
                  type="button"
                  className="justify-center self-center px-4 py-5 mt-4 max-w-full font-semibold text-center text-white rounded shadow-sm bg-blue-950 w-[174px]"
                  onClick={() => setShowImageInput(true)}
                >
                  Change Profile Pic
                </button>
                {showImageInput && (
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileChange(e, setFieldValue)}
                  />
                )}
                <ErrorMessage
                  name="photo_url"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>
              <div className="flex flex-col">
                <TextInput
                  label="FULLNAME"
                  name="full_name"
                  labelAlign="left"
                />
                <TextInput label="ADDRESS" name="address" labelAlign="left" />
                <TextInput
                  label="PHONE NUMBER"
                  name="phone_number"
                  labelAlign="left"
                />
                <DateInput label="BIRTHDAY" name="birth" />
                <SelectInput
                  label="COUNTRY"
                  name="country"
                  options={countries}
                  labelAlign="left"
                />
                <TextInput label="DOCUMENT" name="document" labelAlign="left" />
                <SelectInput
                  label="GENDER"
                  name="gender"
                  options={["---", "male", "female", "other"]}
                  labelAlign="left"
                />
              </div>
            </div>
            <UserFormButtons isSubmitting={isSubmitting} id={id} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
