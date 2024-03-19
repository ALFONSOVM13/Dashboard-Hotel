import RoomTypeItem from "../RoomTypeItem";
import { useSelector, useDispatch } from "react-redux";
import { getAllRoomTypes } from "../../redux/RoomTypes/Actions/actions";
import { useEffect } from "react";
export default function RoomTypes() {
  const { allRoomTypes } = useSelector((state) => state.roomTypesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoomTypes()).then(() => console.log(allRoomTypes));
  }, []);

  return (
    <section className="flex flex-col items-center max-w-[300px] mt-5">
      {" "}
      <header className="flex gap-5 self-stretch px-5 w-full">
        {" "}
        <h2 className="flex-auto my-auto text-lg font-medium tracking-normal text-black">
          {" "}
          Room Types{" "}
        </h2>{" "}
        <button className="justify-center py-2 text-base font-bold tracking-tight leading-6 text-center text-white whitespace-nowrap bg-blue-600 rounded-md px-5">
          {" "}
          Manage{" "}
        </button>{" "}
      </header>{" "}
      {allRoomTypes.map((roomType) => (
        <RoomTypeItem key={roomType.name} name={roomType.name} />
      ))}{" "}
    </section>
  );
}
