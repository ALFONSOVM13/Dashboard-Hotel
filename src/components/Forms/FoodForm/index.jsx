/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function FoodForm({ setShowForm }) {
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
            <Typography
              id="modal-modal-title"
              variant="h3"
              component="h2"
              color="primary"
              fontWeight="bold"
              sx={{
                pb: 4,
              }}
            >
              ADD FOOD
            </Typography>
            <Formik
              initialValues={{
                name: "",
                description: "",
                image: "",
                category: "",
                price: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .required("El nombre es requerido")
                  .matches(
                    /^[a-zA-Z\s]*$/,
                    "El nombre solo puede contener letras y espacios"
                  ),
                description: Yup.string()
                  .required("La descripción es requerida")
                  .min(10, "La descripción debe tener al menos 10 caracteres")
                  .max(
                    400,
                    "La descripción no puede tener más de 100 caracteres"
                  ),
                image: Yup.string().required("La imagen es requerida"),
                category: Yup.string().required("La categoría es requerida"),
                price: Yup.number()
                  .typeError("El precio debe ser un número")
                  .positive("El precio debe ser positivo")
                  .required("El precio es requerido"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
                handleClose();
              }}
              initialTouched={{ price: true }}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({ isSubmitting, handleReset }) => (
                <Form className="w-full">
                  <div className="flex flex-col w-full">
                    <label>NAME</label>
                    <Field
                      type="text"
                      name="name"
                      className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 mb-2 text-sm"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label>DESCRIPTION</label>
                    <Field
                      as="textarea"
                      rows="3"
                      name="description"
                      className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-red-500 mb-2 text-sm"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label>IMAGE</label>
                    <Field
                      type="text"
                      name="image"
                      className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
                    />
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="text-red-500 mb-2 text-sm"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label>CATEGORY</label>
                    <Field
                      type="text"
                      name="category"
                      className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
                    />
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="text-red-500 mb-2 text-sm"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label>PRICE</label>
                    <Field
                      type="text"
                      name="price"
                      className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-red-500 mb-2 text-sm"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                      CREAR
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                      LIMPIAR CAMPOS
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

export default FoodForm;
