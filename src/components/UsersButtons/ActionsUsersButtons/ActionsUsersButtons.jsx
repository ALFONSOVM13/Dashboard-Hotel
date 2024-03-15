/* eslint-disable react/prop-types */
import React from "react";
import EditUserButton from "../EditUserButton/EditUserButton";
import DeleteUserButton from "../DeleteUserButton/DeleteUserButton";

function ActionsUsersButtons({ id }) {
  return (
    <div className="flex justify-center gap-3 w-full h-full items-center p-2">
      <EditUserButton id={id} />
      <DeleteUserButton id={id} />
    </div>
  );
}

export default ActionsUsersButtons;
