import React, { useEffect } from "react";

function SelectField({ label, name, value, handler, error, options = [] }) {
  useEffect(() => {
    console.log("Selected value select:", value);
  }, [value]);
  return (
    options.length && (
      <div className="flex flex-col">
        {" "}
        <label
          htmlFor={name}
          className="text-left mt-5 text-base font-medium tracking-normal dark:text-white  text-gray-700"
        >
          {" "}
          {label}{" "}
        </label>{" "}
        <select
          name={name}
          value={value || ""}
          className="dark:text-black pl-3 shrink-0 mt-3.5 rounded-lg border border-solid bg-gray-100 bg-opacity-90 border-zinc-800 border-opacity-30 h-[41px]"
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
        {error && (
          <span className="text-left tracking-normal mt-2 text-[#ff1212]">
            {error}
          </span>
        )}
      </div>
    )
  );
}

export default SelectField;
