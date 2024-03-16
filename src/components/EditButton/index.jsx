/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router";

function EditButton({ id }) {
  const goToPage = () => {
    Navigate("/" + id);
  };
  return (
    <button
      onClick={goToPage}
      className="flex gap-3 font-semibold text-white justify-center px-4 bg-green-600 rounded-md shadow-sm"
    >
      Edit{" "}
    </button>
  );
}

export default EditButton;
