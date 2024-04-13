import React from "react";
import { Field, ErrorMessage } from "formik";

function DateInput({ label, name }) {
  return (
    <div className={`flex flex-col w-full mt-4`}>
      <label className="text-bold text-lg text-left pl-5 dark:text-white">
        {label}
      </label>
      <Field name={name}>
        {({ field }) => (
          <input
            {...field}
            id="birthday"
            type="date"
            className="border mt-4 mr-4 ml-4 py-2 px-3   text-gray-700 bg-white rounded-md"
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 mb-2 text-sm"
      />
    </div>
  );
}

export default DateInput;
