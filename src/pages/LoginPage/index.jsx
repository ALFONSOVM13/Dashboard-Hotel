import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Logo from "../../components/Logo";
import PasswordInput from "../../components/LoginRegisterComponents/PasswordInput";
import CheckBox from "../../components/LoginRegisterComponents/CheckBox";
import Input from "../../components/LoginRegisterComponents/Input";
import { Link } from "react-router-dom";

function CheckboxIcon() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d0c326c1d928c10dad3b6eba5d1a1edf2d645660c3538e3902281f780805477?apiKey=a388e25d634c4683ada4dcefcdb81b2e&"
      alt="Checkbox icon"
      className="shrink-0 my-auto w-4 aspect-square"
    />
  );
}

export default function LoginPage({ user, setUser, setSession }) {
  const [error, setError] = useState([]);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    keepSession: true,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let errors = [];
    e.preventDefault();
    //Validacion
    if (!inputs.username || !inputs.password) {
      errors.push("All fields are required");
    } else if (inputs.username !== "admin") {
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
      setUser(inputs);
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
    setError([]);
  };
  return (
    <form className="flex flex-col p-6 bg-white rounded max-w-[463px] m-auto">
      <header className="flex gap-1.5 self-left text-base font-extrabold whitespace-nowrap mb-5">
        <Logo />
        <h4 className="my-auto bg-clip-text text-ellipsis">
          Hotel Esmeralda Resort & Spa
        </h4>
      </header>
      <h2 className="mt-1.5 text-2xl font-bold text-zinc-700">Admin Login</h2>
      <p className="mt-2 text-sm text-slate-500">
        Welcome back. Enter your credentials to access your account
      </p>
      <Input
        text={"Username or email"}
        name="username"
        handler={handleChange}
        type={"text"}
      />
      <div className="flex w-full  relative flex-col ">
        <PasswordInput
          name={"password"}
          text="Password"
          handler={handleChange}
          value={inputs.password}
        />
      </div>
      <div className="flex gap-5 mt-6">
        <Link
          to="recover"
          className="text-sm cursor-pointer font-bold text-right text-emerald-700 mb-3"
        >
          Forgot Password
        </Link>
      </div>
      {error.length > 0 && (
        <p className="mt-1 text-sm font-light text-red-600 whitespace-nowrap text-ellipsis">
          {error[0]}
        </p>
      )}
      <label className="flex gap-2 mt-3 text-sm text-zinc-900 text-center">
        <CheckBox
          value={inputs.keepSession}
          handler={handleChange}
          name={"keepSession"}
        />
        <span>Keep me signed in</span>
      </label>
      <Link
        to="register"
        className="text-md cursor-pointer font-bold text-right text-red-700 my-7"
      >
        Haven't an account? Click here to register.
      </Link>
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
