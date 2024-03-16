/* eslint-disable react/prop-types */
import React from "react";
import hamburguer from "./icons/hamburguer.svg";
import mosaic from "./icons/mosaic.svg";
import mail from "./icons/mail.svg";

function ListCategory({ icon, text }) {
  const imagetoshow = (icon) => {
    if (icon === "hamburguer") return hamburguer;
    else if (icon === "mosaic") return mosaic;
    else if (icon === "mail") return mail;
  };
  return (
    <div className="flex gap-2.5 self-stretch mt-4 text-sm xl:text-xl font-medium tracking-normal text-sky-500 whitespace-nowrap">
      <img
        loading="lazy"
        src={imagetoshow(icon)}
        className="shrink-0 w-6 aspect-square"
      />
      <div className="grow my-auto">{text}</div>
    </div>
  );
}

export default ListCategory;
