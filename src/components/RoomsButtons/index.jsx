/* eslint-disable react/prop-types */
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";

function RoomsButtons({ id, data }) {
  return (
    <div className="flex gap-3 my-5 ml-3">
      <EditButton id={id} />
      <DeleteButton id={id} data={data} />
    </div>
  );
}

export default RoomsButtons;
