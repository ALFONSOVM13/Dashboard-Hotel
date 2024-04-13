/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState } from "react";
function ListOption({ text, link, active }) {
  const [activo, setActivo] = useState(active);
  return (
    <NavLink
      to={link}
      className={({ isActive }) => {
        setActivo(isActive);
        return isActive
          ? "bg-slate-100 dark:bg-[rgba(15,15,15,0.3)]"
          : undefined;
      }}
    >
      <div className="flex pl-5 gap-5 py-2 w-full text-sm xl:text-md items-center max-w-[176px] text-slate-600">
        <div
          className={`w-2 h-2 rounded-full border-2 ${
            activo
              ? "border-green-400 bg-green-400"
              : "border-red-600 bg-red-400"
          } border-solid stroke-[2px]`}
        />
        <div className="text-left font-normal dark:text-slate-200">{text}</div>
      </div>
    </NavLink>
  );
}

export default ListOption;
