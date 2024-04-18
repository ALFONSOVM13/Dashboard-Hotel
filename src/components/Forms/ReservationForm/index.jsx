import { useEffect, useState } from "react";

import moment from "moment";
import FieldContainer from "../../FieldsContainer";
import Button from "../../Button";
import SelectField from "../../SelectField";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../../../redux/Reservations/Actions/actions";
import DateField from "../../DateField";
import { getAllRooms } from "../../../redux/Rooms/Actions/actions";
import { getAllUsers } from "../../../redux/Users/Actions/actions";
import { reconectar } from "../../../utils";
import Loading from "../../Loading";

function ReservationForm({ data }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const structure = {
    room_id: "",
    user_id: "",
    check_in_date: moment().format("YYYY-MM-DD"),
    check_out_date: moment().add(1, "days").format("YYYY-MM-DD"),
  };
  const [reservation, setReservation] = useState({ ...structure });
  const [errors, setErrors] = useState({
    ...structure,
    check_in_date: "",
    check_out_date: "",
  });

  const { allUsers } = useSelector((state) => state.usersReducer);
  const { allRooms } = useSelector((state) => state.roomsReducer);

  const handleChange = (e) => {
    setErrors({
      room_id: "",
      user_id: "",
      check_in_date: "",
      check_out_date: "",
    });
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const validation = () => {
    let error = { ...errors };
    if (reservation.room_id === "") error.room_id = "Please select a Room";
    if (reservation.user_id === "") error.user_id = "Please select an User";
    if (moment(reservation.check_in_date) < moment())
      error.check_in_date = "Check in Date  can not be in the past.";
    if (moment(reservation.check_out_date) < moment(reservation.check_in_date))
      error.check_out_date =
        "The Check out date must be greater than the Check in date";
    setErrors(errors);
    return Object.values(errors).every((value) => value === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;
    try {
      if (!data) {
        dispatch(createReservation(reservation));
        console.log("Saving Reservation...");
      } else {
        //update reservation
        console.log("Updating Reservation...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(reservation);
  }, [reservation]);

  useEffect(() => {
    const obtenerData = async () => {
      return await dispatch(getAllRooms())
        .then(() => dispatch(getAllUsers()))
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
    if (data) setReservation(data);
  }, [data]);

  return (
    <form>
      <Loading state={loading}>
        <div className="grid grid-cols-2 gap-2 px-5">
          <FieldContainer>
            <div className="flex flex-col">
              <SelectField
                name="room_id"
                value={reservation.room_id}
                handler={handleChange}
                label="Room Number"
                options={[
                  ...allRooms.map((room) => ({
                    id: room.id,
                    name: room.room_number,
                  })),
                ]}
                error={errors.room_id}
              />
            </div>
          </FieldContainer>
          <FieldContainer>
            <div className="flex flex-col">
              <SelectField
                name="user_id"
                value={reservation.user_id}
                handler={handleChange}
                label="User Name"
                options={[
                  ...allUsers.map((user) => ({
                    id: user.id,
                    name: user.username,
                  })),
                ]}
                error={errors.user_id}
              />
            </div>
          </FieldContainer>
          <FieldContainer>
            <div className="flex w-full justify-between gap-5">
              <div className="flex flex-col w-full">
                <DateField
                  name="check_in_date"
                  value={reservation.check_in_date}
                  handler={handleChange}
                  label="Check-in Date"
                  error={errors.check_in_date}
                />
              </div>
              {/* <div className="flex flex-col w-1/2">
              <HourField
                name="checkInHour"
                value={reservation.checkInHour}
                handler={handleChange}
                label="Check-in Hour"
              />
            </div> */}
            </div>
          </FieldContainer>
          <FieldContainer>
            <div className="flex w-full justify-between gap-5">
              <div className="flex flex-col w-full">
                <DateField
                  name="check_out_date"
                  value={reservation.check_out_date}
                  handler={handleChange}
                  label="Check-Out Date"
                  error={errors.check_out_date}
                />
              </div>
              {/* <div className="flex flex-col w-1/2">
              <HourField
                name="checkOutHour"
                value={reservation.checkOutHour}
                handler={handleChange}
                label="Check-Out Hour"
              />
            </div> */}
            </div>
          </FieldContainer>
        </div>
        <Button className={"text-white bg-blue-800 mt-5"} action={handleSubmit}>
          Create Reservation
        </Button>
      </Loading>
    </form>
  );
}

export default ReservationForm;
