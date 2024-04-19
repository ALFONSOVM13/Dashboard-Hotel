import * as yup from "yup";

export const schema = yup.object().shape({
  phone_number: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  email: yup.string().email("Invalid email"),
  country: yup
    .string()
    .required("Country is required")
    .not(["---", ""], "Select a country."),
  gender: yup.string().required("Please select a gender"),
});
