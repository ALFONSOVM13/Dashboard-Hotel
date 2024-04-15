import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import TabTitle from "../../../components/TabTitle";
import BackButton from "../../../components/BackButton";
import UserForm from "../../../components/Forms/UserForm";

function EditGuest() {
  const { id } = useParams();
  const location = useLocation();
  const userToEdit = location.state.userToEdit;

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex justify-between items-center">
          <TabTitle title={`Edit guest: ${id}`} />
          <BackButton />
        </div>
      </div>
      <div className="self-start pt-5 pl-5"></div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <UserForm userToEdit={userToEdit} id={id} />
      </div>
    </>
  );
}

export default EditGuest;
