/* eslint-disable react/prop-types */
import {
  checkInReservation,
  checkOutReservation,
} from "../../redux/Reservations/Actions/actions";
import Button from "../Button";
import EditButton from "../EditButton";
import ReleaseButton from "../ReleaseButton";
import confirmation from "../../utils/alerts2";
import { useDispatch } from "react-redux";

function ReservedButtons({ id, data }) {
  const dispatch = useDispatch();
  console.log("Data desde botones", data);
  const checkIn = async () => {
    await confirmation.showConfirmation(
      dispatch,
      data.reservation_number,
      {},
      { text: "delete", execute: checkInReservation },
      `Do check In?`,
      ["Check In success!", "Accept", "info"]
    );
  };
  const checkOut = async () => {
    await confirmation.showConfirmation(
      dispatch,
      data.reservation_number,
      {},
      { text: "delete", execute: checkOutReservation },
      `Do check Out?`,
      ["Check Out success!", "Accept", "info"]
    );
  };
  return (
    <div className="grid grid-cols-2 gap-2 w-[20rem]">
      <EditButton id={id} />
      <ReleaseButton id={id} />
      <Button
        className={`
          block font-semibold text-white grow justify-center px-1 py-2.3 ${
            ["confirmed", "finalized"].includes(data.status)
              ? "bg-slate-500 cursor-not-allowed"
              : "bg-green-700"
          }  rounded-md shadow-md shadow-slate-800`}
        id={id}
        action={
          ["confirmed", "finalized"].includes(data.status) ? () => {} : checkIn
        }
      >
        Check-In
      </Button>
      <Button
        className={`block font-semibold text-white grow justify-center px-1 py-2.3 ${
          ["pending", "finalized"].includes(data.status)
            ? "bg-slate-500 cursor-not-allowed"
            : "bg-red-700"
        } rounded-md shadow-md shadow-slate-800`}
        id={id}
        action={
          ["pending", "finalized"].includes(data.status) ? null : checkOut
        }
      >
        Check-Out
      </Button>
    </div>
  );
}

export default ReservedButtons;
