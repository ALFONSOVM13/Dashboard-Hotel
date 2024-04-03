import React from "react";
import logoIcon from "./logo.svg";

function Logo() {
  return (
    <img
      loading="lazy"
      src={logoIcon}
      className="shrink-0 w-8 aspect-[0.97] fill-green-900"
    />
  );
}
export default Logo;
