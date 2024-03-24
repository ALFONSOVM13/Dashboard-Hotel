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
      <FormTitle title={id ? "EDIT AN USER" : "CREATE AN USER"} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: password,
          phoneNumber: "",
          rol: "",
          gender: "",
          adress: "",
          photo_url: photoUrl,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email.")
            .required("The email is required."),
          name: Yup.string()
            .required("The name is required.")
            .matches(
              /^[A-Za-z\u00C0-\u024F\s']*$/,
              "Invalid characters in the name."
            )
            .max(50, "The name cannot have more than 50 characters."),
          password: Yup.string().required("The password is required."),

          phoneNumber: Yup.string()
            .required("The phone number is required.")
            .matches(
              /^\+(?:[0-9] ?){6,14}[0-9]$/,
              "Invalid phone number format."
            )
            .max(20, "The phone number cannot have more than 20 characters."),
          adress: Yup.string()
            .required("The address is required.")
            .max(100, "The address cannot have more than 100 characters."),
          photo_url: Yup.string().required("The photo is required."),
          rol: Yup.string()
            .required("The rol is required.")
            .notOneOf(["---"], "Please select a valid rol."),
          gender: Yup.string()
            .required("The gender is required.")
            .notOneOf(["---"], "Please select a valid gender."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log("hiciste click en submit");
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
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        <img
                          loading="lazy"
                          src={photoUrl}
                          className="self-center max-w-full rounded-full border-2 border-solid aspect-square border-black border-opacity-30 w-[174px]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter image URL"
                          onChange={(e) => setPhotoUrl(e.target.value)}
                          className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
                        />
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setFieldValue("photo_url", photoUrl);
                            Swal.fire({
                              icon: "success",
                              title: "Photo saved successfully",
                            });
                            handleCloseModal();
                          }}
                          className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                          Acept
                        </button>
                        <button
                          className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                          onClick={() => {
                            Swal.fire({
                              icon: "warning",
                              title: "Photo not saved",
                            });
                            handleCloseModal();
                          }}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
              <div className="flex flex-col">
                <TextInput label="FULLNAME" name="name" labelAlign="left" />
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
                <TextInput label="ADRESS" name="adress" labelAlign="left" />
                <TextInput
                  label="PHONE NUMBER"
                  name="phoneNumber"
                  labelAlign="left"
                />
                <SelectInput
                  label="ROL"
                  name="rol"
                  options={["---", "Active", "Inactive"]}
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
