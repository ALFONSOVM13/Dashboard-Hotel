import Button from "../../components/NewButton/index.jsx";
import PaginationControl from "../../components/PaginationControl";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";
import ReservedButtons from "../../components/ReservedButtons/index.jsx";
import SearchBar from "../../components/SearchBar/index.jsx";
import useTableSearchPagination from "../../hooks/useTableSearchPagination.jsx";
import { useEffect } from "react";
import functions from "../../utils/index.js";

function Reservations() {
  const {
    pagination,
    setPagination,
    searchResults,
    inputValue,
    handleInputChange,
    data,
    setData,
  } = useTableSearchPagination();

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
        .catch((error) => console.log("Error: ", error));
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full">
        <div className="flex justify-between items-center">
          <TabTitle title="Reserved Rooms" />
          <Button text="New Reservation" />
        </div>
        <SearchBar
          text="Room #, Room Name, Date"
          value={inputValue}
          action={handleInputChange}
        />
      </div>
      <div className="self-start pt-5 pl-5"></div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        {inputValue !== "" && searchResults.length === 0 ? (
          <h3>{`No results for "${inputValue}" search...`}</h3>
        ) : (
          <Table
            headers={[
              "Room #",
              "Room Name",
              "Guest Username",
              "Check-In",
              "Check-Out",
              "Actions",
            ]}
            data={searchResults.length > 0 ? searchResults : data}
            Components={ReservedButtons}
            idName="roomNumber"
            size={pagination.size}
            page={pagination.page}
          />
        )}
      </div>
    </>
  );
}

export default Reservations;
