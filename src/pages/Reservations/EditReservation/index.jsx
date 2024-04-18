import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TabTitle from "../../../components/TabTitle";
import ReservationForm from "../../../components/Forms/ReservationForm";
import BackButton from "../../../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { getReservation } from "../../../redux/Reservations/Actions/actions";
import { reconectar } from "../../../utils";
import Loading from "../../../components/Loading";

function EditReservation() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { selectedReservation } = useSelector(
    (state) => state.reservationsReducer
  );
  const { id } = useParams();
  const [data, setData] = useState({});

  //obtener data de reservacion
  useEffect(() => {
    console.log("id", id);
    const obtenerData = async () => {
      return await dispatch(getReservation(id))
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
    if (selectedReservation && Object.keys(selectedReservation).length > 0) {
      console.log(selectedReservation);
      setData(selectedReservation);
    }
  }, [selectedReservation]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <Loading state={loading}>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex justify-between items-center">
          {data && (
            <TabTitle
              title={`Edit reservation: Room ${data.room?.room_number}`}
            />
          )}
          <BackButton />
        </div>
      </div>
      <div className="self-start pt-5 pl-5"></div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <ReservationForm data={data} />
      </div>
    </Loading>
  );
}

export default EditReservation;
