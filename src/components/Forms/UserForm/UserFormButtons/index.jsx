/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UserFormButtons({ isSubmitting, id }) {
  const navigate = useNavigate();

  const handleCancel = () => {
    Swal.fire({
      title: "",
      text: "Are you sure?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire("", "Operation canceled", "success");
        navigate(-1);
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "",
      text: "Are you sure?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire("", "User deleted", "success");
        navigate(-1);
      }
    });
  };

  return (
    <div className="flex gap-5 justify-around items-center mb-9 self-start mt-11 text-base font-semibold tracking-normal text-center text-white whitespace-nowrap max-md:mt-10">
      <div className="flex gap-5 items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex flex-col flex-1 justify-center hover:border-none px-14 py-4 bg-green-800 rounded shadow-sm max-md:px-5"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="flex flex-col flex-1 justify-center hover:border-none px-12 py-4 bg-orange-900 rounded shadow-sm max-md:px-5"
        >
          Cancel
        </button>
      </div>

      {id ? (
        <button
          type="button"
          onClick={handleDelete}
          className="flex gap-2.5 justify-center self-center text-xl bg-white font-extrabold text-orange-600 hover:border-none"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fc9f12c2892fdc289ca967d39a7cd448dc0e15d344267e20af9cd38e3f3f6f9?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
            className="shrink-0 w-11 aspect-square"
          />
          <div className="flex justify-center items-center">DELETE GUEST</div>
        </button>
      ) : null}
    </div>
  );
}

export default UserFormButtons;
