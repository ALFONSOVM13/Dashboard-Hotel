/* eslint-disable react/prop-types */
import React from "react";
import { Field, ErrorMessage } from "formik";

const TextInputWithButton = ({
  label,
  name,
  rows,
  labelAlign = "center",
  action,
  buttonText,
}) => {
  const inputField = (
    <div className="w-full flex justify-between items-end">
      {rows ? (
        <Field
          as="textarea"
          rows={rows}
          name={name}
          className="border mt-4 ml-4 mr-4 py-2 px-3 text-gray-700 bg-white rounded-md flex-[2]"
        />
      ) : (
        <Field
          type="text"
          name={name}
          className="border mt-4 ml-4 mr-4 py-2 px-3 text-gray-700 bg-white rounded-md flex-[1]"
        />
      )}
      <button
        onClick={action}
        className="w-[25%] h-[3rem] bg-purple-800 text-white"
      >
        {buttonText}
      </button>
    </div>
  );

  return (
    <div className={`flex flex-col w-full mt-4`}>
      <label
        className={`text-bold text-lg ${
          labelAlign === "center" ? "" : "text-left pl-5"
        }`}
      >
        {label}
      </label>
      {inputField}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 mb-2 text-sm"
      />
    </div>
  );
};

export default TextInputWithButton;
