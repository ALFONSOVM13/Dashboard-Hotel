import React, { useEffect } from "react";
import { useParams } from "react-router";
import TabTitle from "../../../components/TabTitle";
import BackButton from "../../../components/BackButton";
import ReservationForm from "../../../components/Forms/ReservationForm";
import CalendarComponent from "../../../components/Calendar";

function CreateReservation() {
  //obtener data de reservacion
  useEffect(() => {}, []);
  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex justify-between items-center">
          <TabTitle title={`Create Reservation`} />
          <BackButton />
        </div>
      </div>
      <div className="self-start pt-5 pl-5"></div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <ReservationForm />
        <CalendarComponent />
      </div>
    </>
  );
}

export default CreateReservation;
