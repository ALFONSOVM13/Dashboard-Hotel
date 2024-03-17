/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../InputsForm";
import FormButtons from "../../FormButtons";
import FormTitle from "../../FormTittle";

function UserForm({ setShowForm }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setShowForm(false);
  };

  return (
    <div>
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
            height: "800px",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="flex flex-col items-center w-full h-full">
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
            <FormTitle title="ADD AN USER" />
            <Formik
              initialValues={{
                name: "",
                email: "",
                dni: "",
                phoneNumber: "",
                status: "",
                gender: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Email inválido")
                  .required("El email es requerido"),
                name: Yup.string().required("La contraseña es requerida"),
                dni: Yup.string()
                  .required("El DNI es requerido")
                  .max(8, "El Dni no puede tener mas de 8 caracteres"),
                phoneNumber: Yup.string()
                  .required("El PHONE NUMBER es requerido")
                  .max(
                    15,
                    "El PHONE NUMBER no puede tener mas de 15 caracteres"
                  ),
                status: Yup.string().required("El STATUS es requerido"),
                gender: Yup.string().required("El GENDER es requerido"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
                handleClose();
              }}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({ isSubmitting, handleReset }) => (
                <Form className="w-full">
                  <TextInput label="NAME" name="name" />
                  <TextInput label="EMAIL" name="email" />
                  <TextInput label="DNI" name="dni" />
                  <TextInput label="PHONE NUMBER" name="phoneNumber" />
                  <TextInput label="STATUS" name="status" />
                  <TextInput label="GENDER" name="gender" />
                  <FormButtons
                    isSubmitting={isSubmitting}
                    handleReset={handleReset}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default UserForm;
