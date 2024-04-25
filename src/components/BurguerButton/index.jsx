import React from "react";
import "./styles.css";

const BurguerButton = ({ value, handler }) => {
  return (
    <div
      className={` fixed left-[90%] ${value ? "top-[7rem]" : "top-5"}
       -translate-x-[50%] h-14 w-14 rounded-lg shadow-md shadow-stone-800 bg-white dark:bg-black m-2 border border-slate-300 p-2 z-[501] pt-3`}
    >
      <label htmlFor="burger" className="burger">
        <input id="burger" type="checkbox" checked={value} onChange={handler} />
        <span className=" bg-black dark:bg-white"></span>
        <span className="bg-black dark:bg-white"></span>
        <span className="bg-black dark:bg-white"></span>
      </label>
    </div>
  );
};

export default BurguerButton;
