import icon from "./edit.svg";
export default function RoomTypeItem({ id, name, action }) {
  return (
    <div className="flex gap-4 justify-between px-5 mt-2.5 max-w-full text-sm tracking-normal text-black font-[275] w-[200px]">
      {" "}
      <div className="text-left">{name}</div>{" "}
      <img
        onClick={(e) => action(e, id)}
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0 w-5 aspect-square cursor-pointer"
      />{" "}
    </div>
  );
}
