/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function EditButton({ id }) {
  const goToPage = () => {};
  return (
    <>
      <Link to={`${id}`} className="block w-full">
        <button
          onClick={goToPage}
          className="w-full block gap-3 font-semibold text-white justify-center p-2 bg-blue-700 rounded-md shadow-sm shadow-slate-800"
        >
          Edit{" "}
        </button>
      </Link>
    </>
  );
}

export default EditButton;
