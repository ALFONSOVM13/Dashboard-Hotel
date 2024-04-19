/* eslint-disable react/prop-types */
import React from "react";
import confirmation from "../../utils/alerts2";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../redux/Reservations/Actions/actions";

function ReleaseButton({ id }) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await confirmation.showConfirmation(
      dispatch,
      id,
      {},
      { text: "delete", execute: deleteReservation },
      `Are you sure to delete the reservation selected?`,
      ["The reservation was deleted!", "Accept", "info"]
    );
  };

  return (
    <button
      onClick={handleDelete}
      className="block gap-3 font-semibold text-white grow justify-center px-1 py-2.3 bg-fuchsia-700  rounded-md shadow-md shadow-slate-800"
    >
      Release
    </button>
  );
}

export default ReleaseButton;
