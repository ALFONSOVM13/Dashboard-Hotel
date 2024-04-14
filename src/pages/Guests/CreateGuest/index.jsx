import React from "react";
import "./styles.css";

import { useState } from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormTitle from "../../../components/FormTittle";
import TextInput from "../../../components/TextInput";
import axios from "axios";
import Swal from "sweetalert2";
import { getAllUsers } from "../../../redux/Users/Actions/actions";

const { VITE_BACKEND_URL } = import.meta.env;

function CreateGuest({ setShowForm }) {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    setShowForm(false);
  };

  const handleRegister = async (values) => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_URL}/auth/register`,
        values
      );
      dispatch(getAllUsers());
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="pt-6 dark:text-white">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
            width: "800px",
            height: "auto",
            bgcolor:
              localStorage.getItem("theme") === "dark"
                ? "#333333"
                : "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="flex flex-col items-center w-full h-full dark:text-white">
            <div className="absolute top-0 right-0">
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon className="m-4 text-white bg-red-500 rounded-full" />
              </IconButton>
            </div>
            <FormTitle title="REGISTER A NEW USER" />
            <Formik
              initialValues={{
                email: "",
                username: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().required("The email is required."),
                username: Yup.string().required("The user name is required."),
                password: Yup.string().required("The password is required."),
                confirmPassword: Yup.string().required(
                  "The confirm password is required."
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                Swal.fire({
                  title: "Warning",
                  text: "Are you sure you want to register this user?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes",
                  customClass: {
                    container: "my-swal",
                  },
                }).then((response) => {
                  if (response.isConfirmed) {
                    handleRegister(values);
                    Swal.fire("User successfully registered", "", "success");
                    handleClose();
                  } else if (response.isDismissed) {
                    return;
                  }
                });
              }}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({ isSubmitting }) => (
                <Form className="w-full">
                  <TextInput label="EMAIL" name="email" />
                  <TextInput label="USERNAME" name="username" />
                  <TextInput label="PASSWORD" name="password" />
                  <TextInput label="CONFIRM PASSWORD" name="confirmPassword" />
                  <div className="flex flex-col md:flex-row justify-center gap-5 mt-7">
                    <button
                      type="submit"
                      className="btn btn-primary mt-4 w-full md:w-fit bg-green-700 text-white p-3 mb-10"
                      disabled={isSubmitting}
                    >
                      Register
                    </button>
                    <button
                      className="btn btn-primary mt-4 w-full md:w-fit bg-red-700 text-white p-3 mb-10"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateGuest;
