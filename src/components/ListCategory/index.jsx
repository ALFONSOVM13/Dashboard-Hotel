/* eslint-disable react/prop-types */
// import React from "react";
// import hamburguer from "./icons/hamburguer.svg";
// import mosaic from "./icons/mosaic.svg";
// import mail from "./icons/mail.svg";

function ListCategory({ text }) {
  return (
    <div className="flex gap-2.5 self-stretch mt-4 text-sm xl:text-xl font-medium tracking-normal text-sky-500 whitespace-nowrap">
      <div className="grow mb-3 text-left">{text}</div>
    </div>
  );
}

export default ListCategory;
