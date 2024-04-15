import React from "react";

function Input({ text, name, value, handler, type, error = "" }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mt-6 text-sm font-semibold whitespace-nowrap text-ellipsis text-zinc-900"
      >
        {text}
      </label>
      <input
        onChange={handler}
        value={value}
        name={name}
        type={type}
        id={name}
        placeholder={text}
        className={`justify-center px-3 py-2 mt-1 text-sm whitespace-nowrap rounded border-2 border-solid  text-ellipsis text-zinc-900 bg-slate-100 ${
          error !== "" ? "border-red-700" : "border-slate-500"
        }`}
      />
      {error && <span className="text-red-700 font-bold p-1">{error}</span>}
    </div>
  );
}

export default Input;
