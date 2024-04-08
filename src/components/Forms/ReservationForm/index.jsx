import { useState } from "react";

import moment from "moment";
import InputField from "../../InputField";
import DateField from "../../DateField";
import DateTimePicker from "react-datetime-picker";
import HourField from "../../HourField";

function ReservationForm({ roomNumber = null }) {
  const [reservation, setReservation] = useState({
    roomNumber: "",
    guestId: "",
    checkInDay: moment().format("YYYY-MM-DD"),
    checkInHour: "12",
    checkOutDay: moment().add(1, "days").format("YYYY-MM-DD"),
    checkOutHour: "12",
  });
  const [value, onChange] = useState(new Date());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  return (
    <form className="grid grid-cols-2 gap-5 px-5">
      <div className="flex flex-col">
        <InputField
          name="roomNumber"
          value={reservation.roomNumber}
          label="Room Number"
        />
      </div>
      <div className="flex flex-col">
        <InputField name="Guest" value={reservation.roomNumber} label="Guest" />
      </div>
      <div className="flex w-full justify-between gap-5">
        <div className="flex flex-col w-1/2">
          <DateField
            name="checkInDay"
            value={reservation.checkIn}
            label="Check-in Date"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <HourField
            name="checkInHour"
            value={reservation.checkInHour}
            label="Check-in Hour"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <DateField
          name="checkOutDay"
          value={reservation.checkOut}
          label="Room Number"
        />
      </div>{" "}
    </form>
  );
}

export default ReservationForm;
