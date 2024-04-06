import React from "react";
import icon from "./edit.svg";

function EditButton({ handleEdit }) {
  return (
    <div className="h-[40px] flex items-center">
      <img src={icon} onClick={handleEdit} />
    </div>
  );
}

export default EditButton;
