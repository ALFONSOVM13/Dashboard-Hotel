/* eslint-disable react/prop-types */
import React from "react";

function SearchBar({ text, value, action }) {
  return (
    <div className="flex gap-3 px-9 py-5 mt-14 text-xs tracking-normal bg-white text-slate-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b49e8b3c1539f4661f5272c04b5763e602f8c805eae3399076c480b60b8e19d?"
        className="shrink-0 w-5 aspect-square"
      />
      <input
        type="text"
        placeholder={text}
        className="flex-grow my-auto max-md:max-w-full bg-white text-base"
        value={value}
        onChange={action}
      />
    </div>
  );
}

export default SearchBar;
