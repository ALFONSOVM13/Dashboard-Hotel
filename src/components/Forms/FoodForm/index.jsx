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
            height: "auto",
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
                  .required("The name is required")
                  .matches(/^[A-Z]/, "The first letter must be uppercase.")
                  .matches(
                    /^[a-zA-Z\s]*$/,
                    "The name can only contain letters and spaces."
                  ),
                description: Yup.string()
                  .required("The description is required.")
                  .matches(
                    /^[A-Z][a-zA-Z0-9\s,.-]*$/,
                    "The first letter must be uppercase and only letters, spaces, numbers, commas, and periods are allowed."
                  )
                  .min(10, "The description must have at least 10 characters.")
                  .max(
                    400,
                    "The description cannot have more than 100 characters."
                  ),
                imageUrl: Yup.string().required("The image is required."),
                category: Yup.string()
                  .required("The category is required.")
                  .matches(
                    /^[a-zA-Z0-9\s]*$/,
                    "No special characters are allowed."
                  )
                  .matches(/^[A-Z]/, "The first letter must be uppercase."),
                price: Yup.string()
                  .required("The price is required.")
                  .matches(/^\d+(\.\d{1,2})?$/, {
                    message: "The price must be a valid positive number.",
                    excludeEmptyString: true,
                  }),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                const action = foodToEdit ? putFood : postFood;
                const text = foodToEdit
                  ? "Are you sure you want to edit this meal?"
                  : "Are you sure you want to create this meal?";
                const confirm = foodToEdit
                  ? ["Edited successfully.", "", "success"]
                  : ["Created successfully.", "", "success"];
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
                    clearText={"CLEAR FIELDS"}
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
