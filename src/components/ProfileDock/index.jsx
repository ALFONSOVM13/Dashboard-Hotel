/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

function ProfileDock({
  image = "https://cdn.builder.io/api/v1/image/assets/TEMP/663eae8fd7be6df68f6e25af7f35976248e4a857012e381fb6faa82ea9ca17d3?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
}) {
  const { loggedUser } = useSelector((state) => state.sessionReducer);
  return (
    <div className="flex gap-4 self-stretch my-5 font-medium w-[200px] mx-auto">
      <img
        loading="lazy"
        src={image}
        className="shrink-0 h-[46px] w-[46px] m-auto dark:bg-[rgba(15,15,15,0.8)] rounded-full"
      />
      <div className="flex flex-col flex-1 my-auto">
        <div className="text-sm xl:text-md 2xl:text-lg dark:text-slate-200 text-slate-800 text-left">
          {loggedUser.username.charAt(0).toUpperCase() +
            loggedUser.username.slice(1)}
        </div>
        <div className="mt-2 text-sm xl:text-md 2xl:text-lg tracking-normal text-slate-400 text-left">
          {loggedUser.role.charAt(0).toUpperCase() + loggedUser.role.slice(1)}
        </div>
      </div>
    </div>
  );
}

export default ProfileDock;
