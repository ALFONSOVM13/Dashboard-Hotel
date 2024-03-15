import { useState, useEffect } from "react";
import Button from "../../components/NewButton/index.jsx";
import PaginationControl from "../../components/PaginationControl";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";
import functions from "../../utils/index.js";
import ReservedButtons from "../../components/ReservedButtons/index.jsx";

function Reservations() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  useEffect(() => {
    (async () => {
      fetch("http://localhost:5173/data/reservations.json")
        .then((response) => response.json())
        .then((data) => {
          setData([
            ...data.map((reservation) => {
              return {
                ...reservation,
                checkIn: functions.convertirFechaAAmPm(reservation.checkIn),
                checkOut: functions.convertirFechaAAmPm(reservation.checkOut),
              };
            }),
          ]);
          setPagination({ ...pagination, items: data.length });
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex justify-between items-center">
          <TabTitle title="Reserved Rooms" />
          <Button text="New Reservation" />
        </div>
        <div className="flex gap-3 px-9 py-5 mt-14 text-xs tracking-normal bg-white text-slate-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2a6dbba5d860a59939c495c0fc43844a78a9d4388e98de3cfa2e35be663b20?"
            className="shrink-0 w-5 aspect-square"
          />
          <div className="flex-auto my-auto max-md:max-w-full text-left pl-5">
            Room #, Room Name, Date
          </div>
        </div>
      </div>
      <div className="self-start pt-5 pl-5"></div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        <Table
          headers={[
            "Room #",
            "Room Name",
            "Guest Username",
            "Check-In",
            "Check-Out",
            "Actions",
          ]}
          data={data}
          Components={ReservedButtons}
          idName="roomNumber"
          size={pagination.size}
          page={pagination.page}
        />
      </div>
    </>
  );
}

export default Reservations;
