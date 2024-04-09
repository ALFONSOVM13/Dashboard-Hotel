import React from "react";

const FieldContainer = ({ children }) => {
  return (
    <div className="flex w-full gap-2 lg:gap-5 pb-3 px-3 border-2 border-[rgba(10,10,10,0.2)] dark:border-gray-200 rounded-xl my-5 h-fit">
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
};

export default FieldContainer;
