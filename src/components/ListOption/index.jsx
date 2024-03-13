/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
function ListOption({ text, link, active }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? "bg-slate-100" : undefined)}
    >
      <div className="flex pl-5 gap-5 py-2  w-full text-sm items-center max-w-[176px] text-slate-600">
        <div
          className={`w-2 h-2 rounded-full border-2 ${
            active ? "border-green-400" : "border-red-600"
          } border-solid stroke-[2px]`}
        />
        <div className="text-left font-normal">{text}</div>
      </div>
    </NavLink>
  );
}

export default ListOption;
