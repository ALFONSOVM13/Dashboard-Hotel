import React from "react";

function ProfileDock({ name, email, image = "/img/noImage.png" }) {
  return (
    <div className="flex gap-4 self-stretch mt-5 font-medium w-[200px] mx-auto">
      <img
        loading="lazy"
        src={image}
        className="shrink-0 aspect-square w-[46px]"
      />
      <div className="flex flex-col flex-1 my-auto">
        <div className="text-sm text-slate-800 text-left">{name}</div>
        <div className="mt-2 text-xs tracking-normal text-slate-400 text-left">
          {email}
        </div>
      </div>
    </div>
  );
}

export default ProfileDock;
