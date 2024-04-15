import React, { useEffect } from "react";

function SelectField({ label, name, value, handler, error, options = [] }) {
  useEffect(() => {
    console.log("Selected value select:", value);
  }, [value]);
  return (
    options.length > 0 && (
      <div className="flex flex-col">
        {" "}
        <label
          htmlFor={name}
          className="mt-6 text-sm font-semibold whitespace-nowrap text-ellipsis text-zinc-900"
        >
          {" "}
          {label}{" "}
        </label>{" "}
        <select
          name={name}
          value={value || ""}
          className={`justify-center px-3 py-2 mt-1 text-sm whitespace-nowrap rounded border-2 border-solid  text-ellipsis text-zinc-900 bg-slate-100 ${
            error !== "" ? "border-red-700" : "border-slate-500"
          }`}
          onChange={handler}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.length > 0 &&
            options.map((option) => (
              <option key={name + option.id} value={option.id}>
                {option.name}
              </option>
            ))}
        </select>
        {error && <span className="text-red-700 font-bold p-1">{error}</span>}
      </div>
    )
  );
}

export default SelectField;
