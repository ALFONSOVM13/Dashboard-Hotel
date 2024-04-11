/* eslint-disable react/prop-types */
import { Field, ErrorMessage } from "formik";

const SelectInput = ({ label, name, options, labelAlign = "center" }) => {
  const inputField = (
    <Field
      as="select"
      name={name}
      className="border mt-4 mr-4 ml-4 py-2 px-3  text-gray-700 bg-white rounded-md"
    >
      {options.map((option) => (
        <option key={option + "Selector"} value={option}>
          {option}
        </option>
      ))}
    </Field>
  );

  return (
    <div className="flex flex-col w-full mt-4">
      <label
        className={`text-bold text-lg dark:text-white ${
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

export default SelectInput;
