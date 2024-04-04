/* eslint-disable react/prop-types */
import React from "react";

function ProfileDock({ name, role, image = "/img/noImage.png" }) {
  return (
    <div className="flex gap-4 self-stretch my-5 font-medium w-[200px] mx-auto">
      <img
        loading="lazy"
        src={image}
        className="shrink-0 h-[46px] w-[46px] m-auto dark:bg-[rgba(15,15,15,0.8)] rounded-full"
      />
      <div className="flex flex-col flex-1 my-auto">
        <div className="text-sm xl:text-md 2xl:text-lg dark:text-slate-200 text-slate-800 text-left">
          {name}
        </div>
        <div className="mt-2 text-sm xl:text-md 2xl:text-lg tracking-normal text-slate-400 text-left">
          {role}
        </div>
      </div>
    </div>
  );
}

export default ProfileDock;
