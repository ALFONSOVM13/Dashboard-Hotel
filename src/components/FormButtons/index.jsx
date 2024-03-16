/* eslint-disable react/prop-types */
import React from "react";

const FormButtons = ({ isSubmitting, handleReset }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        CREAR
      </button>
      <button
        type="button"
        onClick={handleReset}
        className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        LIMPIAR CAMPOS
      </button>
    </div>
  );
};

export default FormButtons;
