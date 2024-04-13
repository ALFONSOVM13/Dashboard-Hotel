import Button from "../../components/NewButton/index.jsx";
import PaginationControl from "../../components/PaginationControl";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";
import ReservedButtons from "../../components/ReservedButtons/index.jsx";
import SearchBar from "../../components/SearchBar/index.jsx";
import useTableSearchPagination from "../../hooks/useTableSearchPagination.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllReservations } from "../../redux/Reservations/Actions/actions.js";
import { convertirFechaAAmPm } from "../../utils/index.js";
import { getAllUsers } from "../../redux/Users/Actions/actions.js";
import { getAllRooms } from "../../redux/Rooms/Actions/actions.js";

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
  const dispatch = useDispatch();
  const { allReservations } = useSelector((state) => state.reservationsReducer);
  const { allUsers } = useSelector((state) => state.usersReducer);
  const { allRooms } = useSelector((state) => state.roomsReducer);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllReservations());
    dispatch(getAllUsers());
    dispatch(getAllRooms());
  }, []);

  useEffect(() => {
    if (
      allReservations !== undefined &&
      allReservations.length > 0 &&
      allRooms !== undefined &&
      allRooms.length > 0 &&
      allUsers !== undefined &&
      allUsers.length > 0
    ) {
      setData(
        allReservations.map((reservation) => ({
          reservation_number: reservation.reservation_number,
          user_name: allUsers.find((user) => user.id === reservation.user_id)
            .username,
          room_number: allRooms.find((room) => room.id === reservation.room_id)
            .room_number,
          check_in_date: convertirFechaAAmPm(reservation.check_in_date),
          check_out_date: convertirFechaAAmPm(reservation.check_out_date),
          status: reservation.status,
          total_price: "$ " + reservation.total_price,
        }))
      );
      setPagination({ ...pagination, items: data.length });
      console.log(allReservations);
    }
  }, [allReservations, allUsers, allRooms]);

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full">
        <div className="flex justify-between items-center">
          <TabTitle title="Reserved Rooms" />
          <Button text="New Reservation" onClick={() => navigate("create")} />
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
              "Reservation #",
              "Guest username",
              "Room #",
              "Check-In",
              "Check-Out",
              "Status",
              "Price",
              "Actions",
            ]}
            data={searchResults.length > 0 ? searchResults : data}
            Components={ReservedButtons}
            idName="id"
            size={pagination.size}
            page={pagination.page}
          />
        )}
      </div>
    </>
  );
}

export default Reservations;
