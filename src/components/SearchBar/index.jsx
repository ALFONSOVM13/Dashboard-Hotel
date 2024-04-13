/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

function SearchBar({ text, value, action, stretch = false }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(localStorage.theme === "dark");
    document.documentElement.addEventListener("change", function (e) {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
  }, []);

  return (
    <div
      className={`flex gap-3 px-9 py-5 ${
        stretch ? " mt-0" : "mt-5"
      } text-xs tracking-normal bg-white dark:bg-[#333333] rounded-lg text-slate-400 max-md:flex-wrap max-md:px-5 max-md:mt-10`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-search"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke={`${isDark ? "#ffffff" : "#000000"}`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <input
        type="text"
        placeholder={text}
        className="flex-grow my-auto max-md:max-w-full bg-white text-black dark:bg-[#111111] dark:text-gray-300"
        value={value}
        onChange={action}
      />
    </div>
  );
}

export default SearchBar;
