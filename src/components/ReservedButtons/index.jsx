/* eslint-disable react/prop-types */
import EditButton from "../EditButton";
import ReleaseButton from "../ReleaseButton";

function ReservedButtons({ id }) {
  return (
    <div className="flex gap-3 my-5 ml-3">
      <EditButton id={id} />
      <ReleaseButton id={id} />
    </div>
  );
}

export default ReservedButtons;
