/* eslint-disable react/prop-types */
import { useState } from "react";

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

function UserForm({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const generateRandomPassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8);
    setPassword(randomPassword);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <FormTitle title="EDIT AN USER" />
      <Formik
        initialValues={{
          full_name: "",
          phone_number: "",
          document: "",
          country: "",
          address: "",
          photo_url: photoUrl,
          gender: "",
          birth: "",
          password: password,
          rol: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email.")
            .required("The email is required."),
          full_name: Yup.string()
            .required("The name is required.")
            .matches(
              /^[A-Za-z\u00C0-\u024F\s']*$/,
              "Invalid characters in the name."
            )
            .max(50, "The name cannot have more than 50 characters."),
          password: Yup.string().required("The password is required."),
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
          rol: Yup.string()
            .required("The rol is required.")
            .notOneOf(["---"], "Please select a valid rol."),
          gender: Yup.string()
            .required("The gender is required.")
            .notOneOf(["---"], "Please select a valid gender."),
          birthday: Yup.date()
            .required("Birthday is required.")
            .max(new Date(), "Birthday cannot be in the future."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);

          Swal.fire({
            title: "Warning",
            text: id
              ? "Are you sure you want to edit this guest?"
              : "Are you sure you want to create this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((response) => {
            if (response.isConfirmed) {
              Swal.fire("User created successfully", "", "success");
              console.log(values, id);
            } else if (response.isDismissed) {
              return;
            }
          });
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  src={photoUrl}
                  className="self-center max-w-full rounded-full border-2 border-solid aspect-square border-black border-opacity-30 w-[174px]"
                />
                <button
                  className="justify-center self-center px-4 py-5 mt-4 max-w-full font-semibold text-center text-white rounded shadow-sm bg-blue-950 w-[174px]"
                  onClick={handleOpenModal}
                >
                  Change Profile Pic
                </button>
                <ErrorMessage
                  name="photo_url"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
                <Modal
                  open={isModalOpen}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "600px",
                      height: "auto",
                      bgcolor: "background.paper",
                      border: "2px solid #b2a9a9",
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <ImageInput
                      photoUrl={photoUrl}
                      setPhotoUrl={setPhotoUrl}
                      setFieldValue={setFieldValue}
                      handleCloseModal={handleCloseModal}
                    />
                  </Box>
                </Modal>
              </div>
              <div className="flex flex-col">
                <TextInput
                  label="FULLNAME"
                  name="full_name"
                  labelAlign="left"
                />
                <TextInput label="EMAIL" name="email" labelAlign="left" />
                <TextInput
                  label="PASSWORD"
                  name="password"
                  labelAlign="left"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => {
                    generateRandomPassword();
                    setFieldValue("password", password);
                  }}
                  className="bg-blue-500 text-white rounded py-2 px-4 mt-2"
                >
                  Generate Password
                </button>
                <TextInput label="ADDRESS" name="address" labelAlign="left" />
                <TextInput
                  label="PHONE NUMBER"
                  name="phone_number"
                  labelAlign="left"
                />
                <div className="flex flex-col w-full mt-4 text-left">
                  <label className={`text-bold text-lg pl-5`}>BIRTHDAY</label>
                  <Field name="birthday">
                    {({ field }) => (
                      <input
                        {...field}
                        id="birthday"
                        type="date"
                        className="border mt-4 mr-4 ml-4 py-2 px-3   text-gray-700 bg-white rounded-md"
                      />
                    )}
                  </Field>
                </div>
                <TextInput label="COUNTRY" name="country" labelAlign="left" />
                <TextInput label="DOCUMENT" name="document" labelAlign="left" />
                <SelectInput
                  label="ROL"
                  name="rol"
                  options={["---", "Admin", "Employee", "Customer"]}
                  labelAlign="left"
                />
                <SelectInput
                  label="GENDER"
                  name="gender"
                  options={["---", "Male", "Female", "Other"]}
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
