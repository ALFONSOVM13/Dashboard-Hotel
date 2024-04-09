/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../TextInput";
import FormTitle from "../../FormTittle";

function OfferForm({ setShowForm, offerToEdit, setOfferToEdit }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setShowForm(false);
    setOfferToEdit(null);
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
            <FormTitle
              title={offerToEdit ? "EDIT AN OFFER" : "CREATE AN OFFER"}
            />
            <Formik
              initialValues={{
                name: "",
                price: "",
                services: "",
                description: "",
                imageUrl: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .required("The name is required")
                  .matches(/^[A-Z]/, "The first letter must be uppercase.")
                  .matches(
                    /^[A-Za-z\u00C0-\u024F\s']*$/,
                    "Invalid characters in the name."
                  ),
                description: Yup.string()
                  .required("The description is required.")
                  .matches(
                    /^[A-Z][a-zA-Z0-9\s,.-]*$/,
                    "The first letter must be uppercase and only letters, spaces, numbers, commas, and periods are allowed."
                  )
                  .min(10, "The description must have at least 10 characters.")
                  .max(
                    100,
                    "The description cannot have more than 100 characters."
                  ),
                imageUrl: Yup.string().required("The image is required."),
                services: Yup.string().required("The service is required."),

                price: Yup.string()
                  .required("The price is required.")
                  .matches(/^\d+(\.\d{1,2})?$/, {
                    message: "The price must be a valid positive number.",
                    excludeEmptyString: true,
                  }),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                setOfferToEdit(null);
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
                  <TextInput label="SERVICES" name="services" />
                  <TextInput label="IMAGE URL" name="imageUrl" />
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                      {offerToEdit ? "EDIT AN OFFER" : "CREATE AN OFFER"}
                    </button>
                    {offerToEdit ? null : (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                      >
                        CLEAR FIELDS
                      </button>
                    )}
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

export default OfferForm;
