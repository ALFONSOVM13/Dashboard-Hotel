/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../TextInput";
import FormButtons from "../../FormButtons";
import FormTitle from "../../FormTittle";
import { postFood } from "../../../redux/Foods/Actions/actions";

function FoodForm({ setShowForm, foodToEdit, setFoodToEdit }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setShowForm(false);
    setFoodToEdit(null);
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
            <FormTitle title={foodToEdit ? "EDIT FOOD" : "ADD A FOOD"} />
            <Formik
              initialValues={{
                name: foodToEdit ? foodToEdit.name : "",
                description: foodToEdit ? foodToEdit.description : "",
                image: foodToEdit ? foodToEdit.image : "",
                category: foodToEdit ? foodToEdit.category : "",
                price: foodToEdit ? foodToEdit.price : "",
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
                dispatch(postFood(values));
                setSubmitting(false);
                setFoodToEdit(null);
                handleClose();
              }}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({ isSubmitting, resetForm }) => (
                <Form className="w-full">
                  <TextInput label="NAME" name="name" />
                  <TextInput label="DESCRIPTION" name="description" rows="3" />
                  <TextInput label="IMAGE" name="image" />
                  <TextInput label="CATEGORY" name="category" />
                  <TextInput label="PRICE" name="price" />
                  <FormButtons
                    foodToEdit={foodToEdit}
                    isSubmitting={isSubmitting}
                    resetForm={resetForm}
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

export default FoodForm;
