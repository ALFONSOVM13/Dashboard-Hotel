/* eslint-disable react/prop-types */
import React from "react";

function ProfileDock({ name, email, image = "/img/noImage.png" }) {
  return (
    <div className="flex gap-4 self-stretch mt-5 font-medium w-[200px] mx-auto">
      <img
        loading="lazy"
        src={image}
        className="shrink-0 h-[46px] w-[46px] m-auto"
      />
      <div className="flex flex-col flex-1 my-auto">
        <div className="text-sm xl:text-lg text-slate-800 text-left">
          {name}
        </div>
        <div className="mt-2 text-xs xl:text-lg tracking-normal text-slate-400 text-left">
          {email}
        </div>
      </div>
    </div>
  );
}

export default ProfileDock;
