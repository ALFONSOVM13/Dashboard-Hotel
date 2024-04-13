/* eslint-disable react/prop-types */
import React from "react";
import DeleteButton from "../DeleteButton/index";
import EditButton from "../EditButton/index";

function EditDeletButtons({ id, handleDelete, handleEdit }) {
  return (
    <div className="flex justify-center gap-3 w-full h-full items-center p-2">
      <EditButton id={id} handleEdit={handleEdit} />
      <DeleteButton id={id} handleDelete={handleDelete} />
    </div>
  );
}

export default EditDeletButtons;
