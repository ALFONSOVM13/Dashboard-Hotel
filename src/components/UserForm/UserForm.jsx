import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function UserForm() {
  return (
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
          .max(15, "El Phone number no puede tener mas de 15 caracteres"),
        status: Yup.string().required("El STATUS es requerido"),
        gender: Yup.string().required("El GENDER es requerido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              NOMBRE Y APELLIDO
            </label>
            <Field
              type="text"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              EMAIL
            </label>
            <Field
              type="text"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              DNI
            </label>
            <Field
              type="text"
              name="dni"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="dni"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PHONE NUMBER
            </label>
            <Field
              type="text"
              name="phoneNumber"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              STATUA
            </label>
            <Field
              type="text"
              name="status"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="status"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              GENDER
            </label>
            <Field
              type="text"
              name="gender"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
