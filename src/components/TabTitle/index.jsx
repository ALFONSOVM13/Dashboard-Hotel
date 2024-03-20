/* eslint-disable react/prop-types */
import React from "react";

function TabTitle({ title }) {
  return (
    <div className="self-start text-4xl font-semibold tracking-wide whitespace-nowrap text-neutral-500 max-md:ml-2.5">
      {title}
    </div>
  );
}

export default TabTitle;
