import { useEffect } from "react";
import RoomTypeItem from "../RoomTypeItem";
import { useSelector, useDispatch } from "react-redux";
import { getAllRoomTypes } from "../../redux/RoomTypes/Actions/actions";
export default function RoomTypes({ action, control }) {
  const { allRoomTypes } = useSelector((state) => state.roomTypesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getAllRoomTypes());
    } catch (err) {
      console.log("Error in fetching room types", err);
    }
  }, []);

  return (
    <section className="flex flex-col self-start items-center w-[280px] mt-5">
      {" "}
      <header className="flex gap-5 self-stretch px-5 w-full">
        {" "}
        <h2 className="flex-auto my-auto text-lg font-medium tracking-normal text-black">
          {" "}
          Room Types{" "}
        </h2>{" "}
        <button
          className="justify-center py-2 text-base font-bold tracking-tight leading-6 text-center text-white whitespace-nowrap bg-blue-600 rounded-md px-5"
          onClick={() => control(true)}
        >
          {" "}
          Manage{" "}
        </button>{" "}
      </header>{" "}
      <div className="h-[130px] overflow-y-auto mt-3">
        {allRoomTypes.map(
          (roomType) =>
            roomType.name !== "Not Assigned" && (
              <RoomTypeItem
                key={roomType.name}
                id={roomType.id}
                name={roomType.name}
                action={action}
              />
            )
        )}
      </div>
    </section>
  );
}
