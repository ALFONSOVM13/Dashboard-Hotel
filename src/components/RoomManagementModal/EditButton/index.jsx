import React from "react";
import icon from "./edit.svg";

function EditButton() {
  return (
    <div className="h-[40px] flex items-center">
      <img src={icon} />
    </div>
  );
}

export default EditButton;
