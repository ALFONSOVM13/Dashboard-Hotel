import React from "react";
import trash from "./trash.svg";
import confirmation from "../../utils/alerts2";
import { useDispatch } from "react-redux";
import { deleteRoomType } from "../../redux/RoomTypes/Actions/actions";

export default function DeleteTrashButton({ data, control }) {
  const dispatch = useDispatch();
  const showConfirmation = async () => {
    try {
      await confirmation.showConfirmation(
        dispatch,
        data.id,
        {},
        { text: "delete", execute: deleteRoomType },
        `Are you sure to delete "${data.name}" room type?`,
        ["The room type was deleted successfully!", "Accept", "info"],
        control
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex flex-col ml-5 w-4/12 max-md:ml-0 max-md:w-full cursor-pointer"
      onClick={showConfirmation}
    >
      {" "}
      <div className="flex flex-col self-stretch my-auto text-xl font-semibold tracking-wide text-center text-red-600 max-md:mt-10">
        {" "}
        <img
          loading="lazy"
          src={trash}
          alt="Delete room type icon"
          className="self-center aspect-square w-[72px]"
        />{" "}
        <div className="mt-3.5">
          {" "}
          Delete <br /> Room Type{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
