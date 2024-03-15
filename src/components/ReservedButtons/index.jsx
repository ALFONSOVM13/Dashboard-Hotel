import EditButton from "../EditButton";
import ReleaseButton from "../ReleaseButton";

function ReservedButtons({ id }) {
  return (
    <div className="flex gap-3 w-full h-full items-center p-2">
      <EditButton id={id} />
      <ReleaseButton id={id} />
    </div>
  );
}

export default ReservedButtons;
