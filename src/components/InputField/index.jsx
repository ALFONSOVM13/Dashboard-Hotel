export default function InputField({ label, name, value, handler, error }) {
  return (
    <>
      {" "}
      <div className="text-left mt-7 text-base font-medium tracking-normal text-gray-700">
        {" "}
        {label}{" "}
      </div>{" "}
      <input
        type="text"
        name={name}
        value={value}
        className="pl-3 shrink-0 mt-3.5 rounded-lg border border-solid bg-gray-200 bg-opacity-90 border-zinc-800 border-opacity-30 h-[41px]"
        onChange={handler}
      />{" "}
      {error && (
        <span className="text-left tracking-normal mt-2 text-[#ff1212]">
          {error}
        </span>
      )}
    </>
  );
}
