import { Dialog } from "@headlessui/react";
import exampleImg from "./example.jpg";
import SearchBar from "../SearchBar";
import PaginationControl from "../PaginationControl";
import { useEffect } from "react";
import useTableSearchPagination from "../../hooks/useTableSearchPagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomTypes } from "../../redux/RoomTypes/Actions/actions";
import ModalRoomTypesEdit from "../../pages/RoomsCustomization/ModalRoomTypesEdit";
import { useState } from "react";
import Table from "../Table";
export default function RoomManagementModal({ isOpen, onClose }) {
  const {
    pagination,
    setPagination,
    searchResults,
    inputValue,
    handleInputChange,
    data,
    setData,
  } = useTableSearchPagination();
  const { allRoomTypes } = useSelector((state) => state.roomTypesReducer);
  const dispatch = useDispatch();

  const [showModalEditRoomTypes, setShowModalEditRoomTypes] = useState(false);

  useEffect(() => {
    dispatch(getAllRoomTypes()).then((response) => console.log(response));
    setData([
      ...allRoomTypes.map((type) => ({
        name: type.name,
        description: type.description,
        imageUrl: exampleImg,
      })),
    ]);
  }, []);
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {" "}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />{" "}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {" "}
        <Dialog.Panel className="flex flex-col pt-11 pb-7 bg-white rounded-3xl max-w-[710px]">
          {" "}
          <header className="flex flex-col pl-9 w-full max-md:pl-5 max-md:max-w-full">
            {" "}
            <Dialog.Title className="self-start ml-8 text-4xl font-semibold tracking-wide text-neutral-500 max-md:max-w-full">
              {" "}
              Room Type Management{" "}
            </Dialog.Title>{" "}
            {showModalEditRoomTypes && (
              <ModalRoomTypesEdit
                control={setShowModalEditRoomTypes}
                edit={false}
              />
            )}
            <hr className="shrink-0 mt-3 h-px bg-black border border-black border-solid max-md:max-w-full" />{" "}
            <button
              className="justify-center self-end px-5 py-2 mt-4 mr-7 text-base font-bold tracking-tight leading-6 text-center text-white bg-blue-600 rounded-md max-md:mr-2.5"
              onClick={() => setShowModalEditRoomTypes(true)}
            >
              {" "}
              New Room Type{" "}
            </button>{" "}
          </header>{" "}
          <main className="flex flex-col pr-6 pl-16 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
            {" "}
            <div className="max-md:max-w-full">
              {" "}
              <div className="flex gap-5 flex-col max-md:gap-0">
                {" "}
                <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                  <SearchBar
                    text="Room #, Room Name, Date"
                    value={inputValue}
                    action={handleInputChange}
                  />
                  <PaginationControl
                    pagination={pagination}
                    control={setPagination}
                  />
                </div>
                <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
                  {inputValue !== "" && searchResults.length === 0 ? (
                    <h3>{`No results for "${inputValue}" search...`}</h3>
                  ) : (
                    <Table
                      headers={["Image Preview", "Name", "Description"]}
                      data={searchResults.length > 0 ? searchResults : data}
                      idName="roomNumber"
                      size={pagination.size}
                      page={pagination.page}
                    />
                  )}
                </div>
              </div>{" "}
            </div>{" "}
            <button
              onClick={onClose}
              className="justify-center self-end px-16 py-4 mt-12 text-base font-semibold tracking-normal text-center text-white whitespace-nowrap bg-amber-700 rounded shadow-sm max-md:px-5 max-md:mt-10"
            >
              {" "}
              Exit{" "}
            </button>{" "}
          </main>{" "}
        </Dialog.Panel>{" "}
      </div>{" "}
    </Dialog>
  );
}
