/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function EditButton({ url = "", id }) {
  const goToPage = () => {};
  return (
    <>
      <Link to={`${id}`}>
        <button
          onClick={goToPage}
          className="block gap-3 font-semibold text-white justify-center px-4 bg-green-600 rounded-md shadow-md shadow-slate-800"
        >
          Edit{" "}
        </button>
      </Link>
    </>
  );
}

export default EditButton;
