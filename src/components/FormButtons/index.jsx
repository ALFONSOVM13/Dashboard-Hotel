/* eslint-disable react/prop-types */
import React from "react";

const FormButtons = ({ isSubmitting, resetForm, foodToEdit }) => {
  const handleClearFields = () => {
    resetForm();
  };

  return (
    <div className="flex justify-center items-center">
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {foodToEdit ? "EDIT FOOD" : "CREATE FOOD"}
      </button>
      <button
        type="button"
        onClick={handleClearFields}
        className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        CLEAR FIELDS
      </button>
    </div>
  );
};

export default FormButtons;
