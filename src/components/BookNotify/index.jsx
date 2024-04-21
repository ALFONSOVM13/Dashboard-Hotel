import React, { useState } from "react";
import { useForm } from "react-hook-form";

const res = {
  idRoom: "e8bc537e-8fa9-4e6d-b6a4-0de8d69bd762",
  idUser: "a57815e6-f2d4-47fc-aa16-8681f3f2e2f0",
  type: "Standard King",
  adults: 2,
  childs: 1,
  checkin: "2024-05-15",
  checkout: "2024-05-20",
};

const BookNotify = ({ socket }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const onSubmit = async () => {
    try {
      await socket.emit("bookNotification", res);
      setConfirmationMessage("Notification sent successfully!");
    } catch (error) {
      console.error("Error sending notification:", error.message);
      setConfirmationMessage(
        "Failed to send notification. Please try again later."
      );
    }
  };
  // a
  return (
    <div className="max-w-4xl mx-auto my-8 px-4 dark:text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Notification</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="roomId" className="block text-sm font-semibold mb-2">
            Room ID:
          </label>
          <input
            id="roomId"
            type="text"
            defaultValue={res.idRoom}
            {...register("roomId", { required: true })}
            className={`text-black w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none ${
              errors.roomId && "border-red-500"
            }`}
            placeholder="Enter room ID"
          />
          {errors.roomId && (
            <p className="text-red-500 text-sm mt-1">Room ID is required.</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="idUser" className="block text-sm font-semibold mb-2">
            User ID:
          </label>
          <input
            id="idUser"
            type="text"
            defaultValue={res.idUser}
            {...register("idUser", { required: true })}
            className={`text-black w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none ${
              errors.idUser && "border-red-500"
            }`}
            placeholder="Enter user ID"
          />
          {errors.idUser && (
            <p className="text-red-500 text-sm mt-1">User ID is required.</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="type" className="block text-sm font-semibold mb-2">
            Type:
          </label>
          <input
            id="type"
            type="text"
            defaultValue={res.type}
            {...register("type", { required: true })}
            className={`text-black w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none ${
              errors.type && "border-red-500"
            }`}
            placeholder="Enter room type"
          />
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">Type is required.</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="adults" className="block text-sm font-semibold mb-2">
            Adults:
          </label>
          <input
            id="adults"
            type="number"
            defaultValue={res.adults}
            {...register("adults", { required: true })}
            className={`text-black w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none ${
              errors.adults && "border-red-500"
            }`}
            placeholder="Enter number of adults"
          />
          {errors.adults && (
            <p className="text-red-500 text-sm mt-1">
              Number of adults is required.
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="childs" className="block text-sm font-semibold mb-2">
            Childs:
          </label>
          <input
            id="childs"
            type="number"
            defaultValue={res.childs}
            {...register("childs", { required: true })}
            className={`text-black w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none ${
              errors.childs && "border-red-500"
            }`}
            placeholder="Enter number of childs"
          />
          {errors.childs && (
            <p className="text-red-500 text-sm mt-1">
              Number of childs is required.
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="checkin" className="block text-sm font-semibold mb-2">
            Check-in Date:
          </label>
          <input
            id="checkin"
            type="date"
            defaultValue={res.checkin}
            {...register("checkin", { required: true })}
            className={`text-black w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none ${
              errors.checkin && "border-red-500"
            }`}
          />
          {errors.checkin && (
            <p className="text-red-500 text-sm mt-1">
              Check-in date is required.
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="checkout"
            className="block text-sm font-semibold mb-2"
          >
            Check-out Date:
          </label>
          <input
            id="checkout"
            type="date"
            defaultValue={res.checkout}
            {...register("checkout", { required: true })}
            className={`text-black w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none ${
              errors.checkout && "border-red-500"
            }`}
          />
          {errors.checkout && (
            <p className="text-red-500 text-sm mt-1">
              Check-out date is required.
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-xl py-4 font-bold bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg text-white px-8"
          >
            Pago Realizado
          </button>
          {confirmationMessage && (
            <p className="text-green-500 text-sm mt-2">{confirmationMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookNotify;
