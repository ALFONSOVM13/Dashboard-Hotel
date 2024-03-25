import PaginationControl from "../../components/PaginationControl";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";
import ReservedButtons from "../../components/ReservedButtons/index.jsx";
import SearchBar from "../../components/SearchBar/index.jsx";
import useTableSearchPagination from "../../hooks/useTableSearchPagination.jsx";
import { useEffect, useState } from "react";
import { getAllRooms } from "../../redux/Rooms/Actions/actions.js";
import { useDispatch, useSelector } from "react-redux";
import RoomTypes from "../../components/RoomTypes/index.jsx";
import ModalRoomTypesEdit from "./ModalRoomTypesEdit/index.jsx";
import RoomManagementModal from "../../components/RoomManagementModal/index.jsx";

function RoomsCustomization() {
  const dispatch = useDispatch();
  const { allRooms } = useSelector((state) => state.roomsReducer);
  const [roomType, setRoomType] = useState(null);
  const [management, setManagement] = useState(false);
  const [showModalEditRoomTypes, setShowModalEditRoomTypes] = useState(false);
  const {
    pagination,
    setPagination,
    searchResults,
    inputValue,
    handleInputChange,
    data,
    setData,
  } = useTableSearchPagination();

  const showModal = (e, id) => {
    e.preventDefault();
    setRoomType(id);
    setShowModalEditRoomTypes(true);
  };

  useEffect(() => {
    dispatch(getAllRooms());
  }, []);

  useEffect(() => {
    setData([
      ...allRooms.map(
        ({ room_number, room_type, max_capacity, is_active, status }) => ({
          room_number,
          room_type,
          max_capacity,
          services: null,
          is_active,
          status,
        })
      ),
    ]);
    setPagination({ ...pagination, items: data.length });
  }, [allRooms]);
  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center">
          <TabTitle title="Rooms Customization" />
          <RoomTypes action={showModal} control={setManagement} />
          <RoomManagementModal
            isOpen={management}
            onClose={() => setManagement(false)}
          />
          {showModalEditRoomTypes && (
            <ModalRoomTypesEdit
              control={setShowModalEditRoomTypes}
              id={roomType}
              edit={true}
            />
          )}
        </div>
        <SearchBar
          text="Room #, Room Type, Max Capacity"
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
              "Room Type",
              "Max Capacity",
              "Services",
              "State",
              "Status",
            ]}
            data={searchResults.length > 0 ? searchResults : data}
            Components={ReservedButtons}
            idName="room_number"
            size={pagination.size}
            page={pagination.page}
          />
        )}
      </div>
    </>
  );
}

export default RoomsCustomization;
