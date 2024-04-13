import React from "react";
import icon from "./trash.svg";

function DeleteButton({ handleDelete }) {
  return (
    <div>
      <img src={icon} onClick={handleDelete} alt="delete" />
    </div>
  );
}

export default DeleteButton;
