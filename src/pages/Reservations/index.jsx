import Button from "../../components/NewButton/index.jsx";
import PaginationControl from "../../components/PaginationControl";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";
import ReservedButtons from "../../components/ReservedButtons/index.jsx";
import SearchBar from "../../components/SearchBar/index.jsx";
import useTableSearchPagination from "../../hooks/useTableSearchPagination.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllReservations } from "../../redux/Reservations/Actions/actions.js";
import { convertirFechaAAmPm, reconectar } from "../../utils/index.js";
import { getAllUsers } from "../../redux/Users/Actions/actions.js";
import { getAllRooms } from "../../redux/Rooms/Actions/actions.js";
import Loading from "../../components/Loading/index.jsx";

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
  const [loading, setLoading] = useState(null);
  const { allReservations } = useSelector((state) => state.reservationsReducer);

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerData = async () => {
      setLoading(true);
      return await dispatch(getAllReservations())
        .then(() => {
          setLoading(false);
          return true;
        })
        .catch(() => false);
    };
    const rec = async () => {
      await reconectar(obtenerData);
    };
    rec();
  }, []);

  useEffect(() => {
    if (allReservations !== undefined && allReservations.length > 0) {
      const orderReservations = allReservations.sort((a, b) => {
        const dateA = new Date(a.check_in_date);
        const dateB = new Date(b.check_in_date);
        return dateB - dateA;
      });
      setData(
        orderReservations.map((reservation) => ({
          id: reservation.id,
          reservation_number: reservation.reservation_number,
          full_name:
            reservation.user?.guest_profile?.full_name ?? "Not defined",
          room_number: reservation.room?.room_number ?? "Not assigned",
          check_in_date: convertirFechaAAmPm(reservation.check_in_date),
          check_out_date: convertirFechaAAmPm(reservation.check_out_date),
          status: reservation.status,
          total_price: "$ " + reservation.total_price,
        }))
      );
      setPagination({ ...pagination, items: allReservations.length });
      setLoading(false);
      console.log(allReservations);
    }
    console.log(allReservations);
  }, [allReservations]);

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
          <h3 className="dark:text-white">{`No results for "${inputValue}" search...`}</h3>
        ) : (
          <Loading state={loading}>
            <Table
              headers={[
                "Reservation #",
                "Guest Full Name",
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
              omitt="id"
            />
          </Loading>
        )}
      </div>
    </>
  );
}

export default Reservations;
