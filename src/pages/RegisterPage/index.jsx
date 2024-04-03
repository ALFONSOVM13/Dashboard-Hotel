import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Logo from "../../components/Logo";
import PasswordInput from "../../components/LoginRegisterComponents/PasswordInput";
import CheckBox from "../../components/LoginRegisterComponents/CheckBox";
import Input from "../../components/LoginRegisterComponents/Input";

export default function RegisterPage({ user, setUser, setSession }) {
  const [error, setError] = useState([]);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    keepSession: false,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let errors = [];
    e.preventDefault();
    //Validacion
    if (!inputs.user || !inputs.password) {
      errors.push("All fields are required");
    } else if (inputs.user !== "admin") {
      errors.push("Invalid username or password.");
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,80}$/.test(
        inputs.password
      )
    ) {
      errors.push(
        "The password must contain at least one number and one special character, and six characters at least"
      );
    } else {
      //Comprobar usuario y contraseña en BD
      setUser("user", inputs);
      setSession(true);
      navigate("/dashboard");
    }
    setError(errors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "keepSession") {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: !inputs.keepSession,
      }));
    } else {
      setInputs((prevValue) => ({ ...prevValue, [name]: value }));
    }
  };
  return (
    !user && (
      <form className="flex flex-col p-6 bg-white rounded max-w-[463px] m-auto">
        <header className="flex gap-1.5 self-left text-base font-extrabold whitespace-nowrap mb-5">
          <Logo />
          <h4 className="my-auto bg-clip-text text-ellipsis">
            Hotel Esmeralda Resort & Spa
          </h4>
        </header>
        <h2 className="mt-1.5 text-2xl font-bold text-zinc-700">Register</h2>
        <p className="mt-2 text-sm text-slate-500">
          Please send your data and wait for the administrator to validate you.
        </p>
        <Input
          type="text"
          name="username"
          text="User name"
          handler={handleChange}
        />
        <Input type="email" name="email" text="Email" handler={handleChange} />
        <PasswordInput
          name={"password"}
          text="Password"
          handler={handleChange}
          value={inputs.password}
        />
        <PasswordInput
          name={"password2"}
          text="Confirm password"
          handler={handleChange}
          value={inputs.password2}
        />
        {error.length > 0 && (
          <p className="mt-1 text-sm font-light text-red-600 whitespace-nowrap text-ellipsis">
            {error[0]}
          </p>
        )}
        <label className="flex gap-2 mt-6 text-sm text-zinc-900">
          <CheckBox
            value={inputs.keepSession}
            handler={handleChange}
            name={"keepSession"}
          />
          <span>Keep me signed in</span>
        </label>
        <button
          type="submit"
          className="justify-center items-center px-3 py-1.5 mt-6 text-base font-semibold text-center text-white whitespace-nowrap bg-emerald-700 rounded"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </form>
    )
  );
}
