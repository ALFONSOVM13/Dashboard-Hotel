import React from "react";
import { FaBell } from "react-icons/fa";
import "./styles.css";

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
      id="btn-message"
      className="button-message"
      //   className={`button-message transition-all duration-300 text-black w-full h-[3rem] rounded-xl border-slate-400 p-3 rounded-md shadow-md shadow-slate-400 cursor-pointer text-xl ${
      //     selectedRoom === name ? "bg-green-400" : "bg-green-300"
      //   } hover:bg-green-400/70 justify-between`}
      onClick={onClick}
    >
      <div className="content-avatar">
        <div className="status-user"></div>
        <div className="avatar">
          <svg
            className="user-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path>
          </svg>
        </div>
      </div>
      <div className="notice-content">
        <div className="username">
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
                <div className="text-red-800">Delete Chat</div>
              </button>
            </>
          )}
        </div>
        <div className="lable-message">
          {name}
          <span className="number-message">
            {unreadMessagesCount > 0 && (
              <span className="relative inline-block">
                <FaBell />
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs transform translate-x-1/2 -translate-y-1/2">
                  {unreadMessagesCount}
                </span>
              </span>
            )}
          </span>
        </div>
        {/* <div className="user-id">{name}</div> */}
      </div>
      {/* <span className={`flex gap-5`}>
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
      </span> */}
    </div>
  );
};

export default ChatButton;
