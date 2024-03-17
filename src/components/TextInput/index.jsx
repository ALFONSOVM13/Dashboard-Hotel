/* eslint-disable react/prop-types */
import React from "react";
import { Field, ErrorMessage } from "formik";

const TextInput = ({ label, name, rows }) => {
  const inputField = rows ? (
    <Field
      as="textarea"
      rows={rows}
      name={name}
      className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
    />
  ) : (
    <Field
      type="text"
      name={name}
      className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
    />
  );

  return (
    <div className="flex flex-col w-full">
      <label>{label}</label>
      {inputField}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 mb-2 text-sm"
      />
    </div>
  );
};

export default TextInput;
