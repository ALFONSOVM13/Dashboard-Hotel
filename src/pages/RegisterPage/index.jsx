import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Logo from "../../components/Logo";
import PasswordInput from "../../components/PasswordInput";
import CheckBox from "../../components/LoginRegisterComponents/CheckBox";
import Input from "../../components/LoginRegisterComponents/Input";
import registerUser from "./registerUser";
import SelectField from "../../components/SelectFieldRegister";
import { failAlert, successAlert } from "../../utils/SuccesAlert";
import BackButton from "../../components/BackButton";

export default function RegisterPage() {
  const [error, setError] = useState({
    username: "",
    full_name: "",
    email: "",
    gender: "",
    phone_number: "",
    password: "",
    password2: "",
  });
  const [inputs, setInputs] = useState({
    username: "",
    full_name: "",
    phone_number: "",
    gender: "",
    email: "",
    password: "",
    password2: "",
  });
  const genderOptions = [
    { id: "male", name: "Male" },
    { id: "female", name: "Female" },
    { id: "other", name: "Other" },
  ];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let errors = {};
    e.preventDefault();
    //Validacion
    if (inputs.username.trim() === "") {
      errors = { ...errors, username: "Please enter an User Name." };
    } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(inputs.username)) {
      errors = {
        ...errors,
        username:
          "User Name must have letters, numbers and underscores and be between 3 and 16 characters long.",
      };
    }
    if (
      !/^(\(\+?\d{2,3}\)[*|\s|\-|.]?(([\d][*|\s|\-|.]?){6})(([\d][\s|\-|.]?){2})?|(\+?[\d][\s|\-|.]?){8}(([\d][\s|\-|.]?){2}(([\d][\s|\-|.]?){2})?)?)$/.test(
        inputs.phone_number
      )
    )
      errors = {
        ...errors,
        phone_number: "Please write a valid phone.",
      };
    if (inputs.gender.trim() === "") {
      errors = { ...errors, gender: "Please select your Gender." };
    }
    if (inputs.full_name.trim() === "") {
      errors = { ...errors, full_name: "Please enter your Full Name." };
    }
    if (inputs.password.trim() === "") {
      errors = { ...errors, password: "Password can't be empty" };
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,80}$/.test(
        inputs.password
      )
    ) {
      errors = {
        ...errors,
        password:
          "The password must contain at least one number and one special character, and six characters at least",
      };
    } else if (inputs.password !== inputs.password2) {
      errors = { ...errors, password2: "Passwords do not match." };
    }
    if (Object.keys(errors).length === 0) {
      registerUser(inputs)
        .then(async (response) => {
          if (response.status === 409) {
            await failAlert(undefined, "This user already exists.", undefined);
            return;
          } else if (response.status === 500) {
            await failAlert(undefined, "Internal Server Error!", undefined);
            return;
          } else if (response.status === 201)
            await successAlert(
              undefined,
              "Reagistration Successfully",
              undefined
            ).then(() => navigate(-1));
        })
        .catch((err) => console.error(err));
    } else setError(errors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevValue) => ({ ...prevValue, [name]: value }));
    setError({ ...error, [name]: "" });
  };

  useEffect(() => {
    console.log("inputs", inputs);
    console.log("error", error);
  }, [inputs, error]);

  return (
    <form className="flex flex-col p-6 bg-white rounded max-w-[463px] m-auto">
      <header className="flex gap-1.5 self-left justify-between text-base font-extrabold whitespace-nowrap mb-5">
        <Logo />
        <h4 className="my-auto bg-clip-text text-ellipsis">
          Hotel Esmeralda Resort & Spa
        </h4>
        <BackButton />
      </header>
      <h2 className="mt-1.5 text-2xl font-bold text-zinc-700">Register</h2>
      <p className="mt-2 text-sm text-slate-500">
        Please send your data and wait for the administrator to validate you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input
          type="text"
          name="full_name"
          text="Full Name"
          handler={handleChange}
          error={error.full_name}
        />
        <Input
          type="text"
          name="username"
          text="User name"
          handler={handleChange}
          error={error.username}
        />
        <Input
          type="phone"
          name="phone_number"
          text="Phone"
          handler={handleChange}
          error={error.phone_number}
        />
        <SelectField
          label="Gender"
          name={"gender"}
          value={inputs.gender}
          error={error.gender}
          handler={handleChange}
          options={genderOptions}
        />
        <Input type="email" name="email" text="Email" handler={handleChange} />
        <PasswordInput
          name={"password"}
          text="Password"
          handler={handleChange}
          error={error.password}
          value={inputs.password}
        />
        <PasswordInput
          name={"password2"}
          text="Confirm password"
          handler={handleChange}
          error={error.password2}
          value={inputs.password2}
        />
      </div>
      <button
        type="submit"
        className="justify-center items-center px-3 py-1.5 mt-6 text-base font-semibold text-center text-white whitespace-nowrap bg-emerald-700 rounded"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </form>
  );
}
