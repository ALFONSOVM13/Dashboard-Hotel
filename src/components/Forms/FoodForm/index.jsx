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
import { postFood, putFood } from "../../../redux/Foods/Actions/actions";
import alertFunctions from "../../../utils/alerts";

function FoodForm({ setShowForm, foodToEdit, setFoodToEdit, setInputValue }) {
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
            <FormTitle title={foodToEdit ? "EDIT A FOOD" : "CREATE A FOOD"} />
            <Formik
              initialValues={{
                name: foodToEdit ? foodToEdit.name : "",
                price: foodToEdit ? foodToEdit.price : "",
                category: foodToEdit ? foodToEdit.category : "",
                description: foodToEdit ? foodToEdit.description : "",
                imageUrl: foodToEdit ? foodToEdit.imageUrl : "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .required("El nombre es requerido")
                  .matches(/^[A-Z]/, "La primera letra debe ser mayúscula")
                  .matches(
                    /^[a-zA-Z\s]*$/,
                    "El nombre solo puede contener letras y espacios"
                  ),
                description: Yup.string()
                  .required("La descripción es requerida")
                  .matches(
                    /^[A-Z][a-zA-Z0-9\s,.-]*$/,
                    "La primera letra debe ser mayúscula y solo se permiten letras, espacios, números, comas y puntos"
                  )
                  .min(10, "La descripción debe tener al menos 10 caracteres")
                  .max(
                    400,
                    "La descripción no puede tener más de 100 caracteres"
                  ),
                imageUrl: Yup.string().required("La imagen es requerida"),
                category: Yup.string()
                  .required("La categoría es requerida")
                  .matches(
                    /^[a-zA-Z0-9\s]*$/,
                    "No se permiten caracteres especiales"
                  )
                  .matches(/^[A-Z]/, "La primera letra debe ser mayúscula"),
                price: Yup.string()
                  .required("El precio es requerido")
                  .matches(/^\$/, "El precio debe comenzar con el símbolo '$'")
                  .matches(
                    /^\$\d+(\.\d{1,2})?$/,
                    "El precio debe ser un número positivo válido"
                  ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                const action = foodToEdit ? putFood : postFood;
                const text = foodToEdit
                  ? "¿Estas seguro que quieres editar esta comida?"
                  : "¿Estas seguro que quieres crear esta comida?";
                const confirm = foodToEdit
                  ? ["Editado correctamente", "", "success"]
                  : ["Creado correctamente", "", "success"];
                alertFunctions.seeAlert(
                  dispatch,
                  foodToEdit ? foodToEdit.id : null,
                  values,
                  action,
                  text,
                  confirm
                );
                setInputValue("");
                setFoodToEdit(null);
                handleClose();
              }}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({ isSubmitting, resetForm }) => (
                <Form className="w-full">
                  <TextInput label="NAME" name="name" />
                  <TextInput label="PRICE" name="price" />
                  <TextInput label="DESCRIPTION" name="description" rows="3" />
                  <TextInput label="CATEGORY" name="category" />
                  <TextInput label="IMAGE URL" name="imageUrl" />
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
