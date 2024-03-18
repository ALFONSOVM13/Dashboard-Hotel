import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../TextInput";
import FormButtons from "../../FormButtons";
import SelectInput from "../../SelectInput";
import TextInputWithButton from "../../TextInputWithButton";

function ReservationForm({ roomNumber }) {
  const obtenerGuestId = () => {
    //Aqui se obtiene el GuestId a partir del roomNumber
    return 5;
  };

  const seeProfile = () => {
    alert(`Perfil ${obtenerGuestId()}`);
  };
  return (
    <>
      <Formik
        initialValues={{
          roomNumber: "",
          guestName: "",
          cel: "",
          email: "",
        }}
        validationSchema={Yup.object().shape({
          guestName: Yup.string().required("The guest name is required"),
          roomNumber: Yup.string().required("La contraseña es requerida"),
          cel: Yup.string()
            .required("Cellphone required")
            .min(8, "The cellphone number must be at least 10 digits"),
          email: Yup.string()
            .email("Fill with a valid email")
            .required("The e-mail is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <div className=" grid grid-cols-1 md:grid-cols-2">
              <SelectInput
                label="Change Reservated Room Number"
                name="roomNumber"
                options={[401, 402, 403]}
                initialValue={roomNumber}
                labelAlign="left"
              />
              <TextInputWithButton
                label="Reservation Guest Name"
                name="guestUsername"
                labelAlign="left"
                action={seeProfile}
                buttonText={"See profile"}
              />
              <SelectInput
                label="Room Type"
                name="roomType"
                options={[
                  "Presidential Room",
                  "Standard Room",
                  "Championship Room",
                ]}
                initialValue={"Not assigned"}
                labelAlign="left"
              />
              <TextInput label="Cell phone" name="cel" labelAlign="left" />
              <TextInput label="E-mail" name="email" labelAlign="left" />
            </div>
            <FormButtons
              isSubmitting={isSubmitting}
              clearButton={false}
              submitText="Save Reservation Info"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ReservationForm;
