/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

function ProfileDock({ name, email, image = "/img/noImage.png", setSession }) {
  const [user, setUser, clearValue] = useLocalStorage("user");
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    clearValue();
    navigate("/");
    setSession(false);
  };
  return (
    <div className="flex gap-4 self-stretch mt-5 font-medium w-[200px] mx-auto">
      <button onClick={logout} className="bg-slate-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-logout"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M9 12h12l-3 -3" />
          <path d="M18 15l3 -3" />
        </svg>
      </button>
      <img
        loading="lazy"
        src={image}
        className="shrink-0 h-[46px] w-[46px] m-auto"
      />
      <div className="flex flex-col flex-1 my-auto">
        <div className="text-sm xl:text-md 2xl:text-lg text-slate-800 text-left">
          {name}
        </div>
        <div className="mt-2 text-sm xl:text-md 2xl:text-lg tracking-normal text-slate-400 text-left">
          {email}
        </div>
      </div>
    </div>
  );
}

export default ProfileDock;
