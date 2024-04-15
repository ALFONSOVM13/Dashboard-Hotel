import React, { useState } from "react";
import Eye from "./eye.svg";
function PasswordInput({ text, name, value, handler, error }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col">
      <label
        htmlFor="password"
        className="mt-6 flex-1 text-sm font-semibold text-ellipsis text-zinc-900"
      >
        {text}
      </label>

      <div className="flex w-full relative flex-col ">
        <input
          onChange={handler}
          value={value}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={text}
          className={`justify-center px-3 py-2 mt-1 text-sm whitespace-nowrap rounded border-2 border-solid ${
            error !== "" ? "border-red-700" : "border-slate-500"
          } text-ellipsis text-zinc-900 bg-slate-100 w-full ${
            showPassword ? "tracking-normal" : "tracking-widest"
          }`}
        />
        <img
          loading="lazy"
          src={Eye}
          alt="Eye icon"
          className="shrink-0 w-4 aspect-square absolute top-4 right-3"
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
        />
        {error && <span className="text-red-700 font-bold p-1">{error}</span>}
      </div>
    </div>
  );
}

export default PasswordInput;
