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
          guestUsername: "",
          dni: "",
          phoneNumber: "",
          status: "",
          gender: "",
        }}
        validationSchema={Yup.object().shape({
          guestUsername: Yup.string().required("El email es requerido"),
          roomNumber: Yup.string().required("La contraseña es requerida"),
          dni: Yup.string()
            .required("El DNI es requerido")
            .max(8, "El Dni no puede tener mas de 8 caracteres"),
          phoneNumber: Yup.string()
            .required("El PHONE NUMBER es requerido")
            .max(15, "El PHONE NUMBER no puede tener mas de 15 caracteres"),
          status: Yup.string().required("El STATUS es requerido"),
          gender: Yup.string().required("El GENDER es requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting, handleReset }) => (
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
              <TextInput label="Room Name" name="roomaName" labelAlign="left" />
              <TextInput
                label="PHONE NUMBER"
                name="phoneNumber"
                labelAlign="left"
              />
              <TextInput label="STATUS" name="status" labelAlign="left" />
              <TextInput label="GENDER" name="gender" labelAlign="left" />
            </div>
            <FormButtons
              isSubmitting={isSubmitting}
              handleReset={handleReset}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ReservationForm;
