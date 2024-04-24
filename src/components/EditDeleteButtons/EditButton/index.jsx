/* eslint-disable react/prop-types */
import React from "react";

function EditUserButton({ id, handleEdit }) {
  return (
    <button
      onClick={() => handleEdit(id)}
      className="flex gap-3 font-semibold text-white justify-center p-3 bg-green-600 rounded-md shadow-sm"
    >
      Edit
    </button>
  );
}

export default EditUserButton;
