import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Logo() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4081ad3295bbea81c905964c00f2248962ba43500783275247c0985f85ec3888?apiKey=a388e25d634c4683ada4dcefcdb81b2e&"
      alt="Hotel Esmeralda logo"
      className="shrink-0 w-8 aspect-[0.97] fill-green-900"
    />
  );
}

function EyeIcon() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b31c9d10e51866df31acee4261701ad52069ff8bdf83ea888fcecb0955595ef3?apiKey=a388e25d634c4683ada4dcefcdb81b2e&"
      alt="Eye icon"
      className="shrink-0 w-4 aspect-square absolute top-4 right-3"
    />
  );
}

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

export default function RegisterPage({ user, setUser, setSession }) {
  const [error, setError] = useState([]);
  const [inputs, setInputs] = useState({ user: "", password: "" });
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
    setInputs((prevValue) => ({ ...prevValue, [name]: value }));
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
        <h2 className="mt-1.5 text-2xl font-bold text-zinc-700">Admin Login</h2>
        <p className="mt-2 text-sm text-slate-500">
          Welcome back. Enter your credentials to access your account
        </p>
        <label
          htmlFor="email"
          className="mt-6 text-sm font-semibold whitespace-nowrap text-ellipsis text-zinc-900"
        >
          Email Address
        </label>
        <input
          onChange={handleChange}
          value={inputs.user}
          name="user"
          type="email"
          id="email"
          placeholder="hello@example.com, username"
          className="justify-center px-3 py-2 mt-1 text-sm whitespace-nowrap rounded border-2 border-solid border-slate-500 text-ellipsis text-zinc-900 bg-slate-100"
        />
        <div className="flex gap-5 mt-6">
          <label
            htmlFor="password"
            className="flex-1 text-sm font-semibold text-ellipsis text-zinc-900"
          >
            Password
          </label>
          <a
            href="#"
            className=" absolute text-xs font-bold text-right text-emerald-700"
          >
            Forgot Password
          </a>
        </div>
        <div className="flex w-full  relative ">
          <input
            onChange={handleChange}
            value={inputs.password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="justify-center px-3 py-2 mt-1 text-sm whitespace-nowrap rounded border-2 border-solid border-slate-500 text-ellipsis text-zinc-900 bg-slate-100 w-full"
          />
          <EyeIcon />
        </div>
        {error.length > 0 && (
          <p className="mt-1 text-sm font-light text-red-600 whitespace-nowrap text-ellipsis">
            {error[0]}
          </p>
        )}
        <label className="flex gap-2 mt-6 text-sm text-zinc-900">
          <CheckboxIcon />
          <span>Keep me signed in</span>
          <input type="checkbox" className="sr-only" />
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
