import React from "react";
import { FaBell } from "react-icons/fa";

const ChatButton = ({
  name,
  onClick,
  selectedRoom,
  unreadMessagesCount,
  cerrarSala,
}) => {
  console.log(selectedRoom, name, selectedRoom === name);
  return (
    <div
      className={`transition-all duration-300 text-black w-full h-[3rem] rounded-xl border-slate-400 p-3 rounded-md shadow-md shadow-slate-400 cursor-pointer text-xl ${
        selectedRoom === name ? "bg-green-400" : "bg-green-300"
      } hover:bg-green-400/70 justify-between`}
      onClick={onClick}
    >
      <span className={`flex gap-5`}>
        {unreadMessagesCount > 0 && (
          <span className="relative inline-block">
            <FaBell />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs transform translate-x-1/2 -translate-y-1/2">
              {unreadMessagesCount}
            </span>
          </span>
        )}
        {name}
        {selectedRoom === name && (
          <>
            <button
              className=" bg-transparent flex"
              onClick={(e) => {
                e.stopPropagation();
                cerrarSala(name);
              }}
            >
              <div className="h-7 w-7 pb-2 text-2xl text-red-500 align-baseline font-bold absolute right-[0%] top-[-15px]">
                x
              </div>
            </button>
          </>
        )}
      </span>
    </div>
  );
};

export default ChatButton;
