import React from "react";
import { useParams } from "react-router";

function EditReservation() {
  const { reservationId } = useParams();
  return <div>EditReservation: {reservationId}</div>;
}

export default EditReservation;
