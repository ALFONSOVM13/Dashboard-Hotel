import React from "react";
import TabTitle from "../../../components/TabTitle";

const CreateEmployee = () => {
  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center">
          <TabTitle title={"Create Employee"} />
        </div>
      </div>
    </>
  );
};

export default CreateEmployee;
