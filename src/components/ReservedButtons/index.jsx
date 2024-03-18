/* eslint-disable react/prop-types */
import EditButton from "../EditButton";
import ReleaseButton from "../ReleaseButton";

function ReservedButtons({ id }) {
  return (
    <div className="flex gap-3 justify-center items-center">
      <EditButton id={id} />
      <ReleaseButton id={id} />
    </div>
  );
}

export default ReservedButtons;
