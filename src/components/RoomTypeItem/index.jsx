import icon from "./edit.svg";
export default function RoomTypeItem({ id, name, action }) {
  return (
    <div
      className="flex gap-4 cursor-pointer px-5 mt-2.5 max-w-full text-sm tracking-normal dark:text-white text-black w-[250px] items-center font-bold"
      onClick={(e) => action(e, id)}
    >
      {" "}
      <div className="text-left">{name}</div>{" "}
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0  aspect-square border border-[rgba(200,200,200,0.8)] p-1 rounded-xl bg-white"
      />{" "}
    </div>
  );
}
