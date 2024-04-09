/* eslint-disable react/prop-types */
import React from "react";
import { deleteRoom } from "../../redux/Rooms/Actions/actions";
import { useDispatch } from "react-redux";
import confirmation from "../../utils/alerts2";

function DeleteButton({ data }) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await confirmation.showConfirmation(
      dispatch,
      data.id,
      {},
      { text: "delete", execute: deleteRoom },
      `Are you sure to delete room #"${data.room_number}"?`,
      ["The room was deleted successfully!", "Accept", "info"]
    );
  };
  return (
    <button
      onClick={handleDelete}
      className="block gap-3 font-semibold text-white grow justify-center px-1 py-2.3 bg-red-700  rounded-md shadow-md shadow-slate-800"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
