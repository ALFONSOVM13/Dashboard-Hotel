export default function InputField({
  label,
  name,
  value,
  handler,
  error,
  type,
}) {
  return (
    <>
      {" "}
      <div className="text-left mt-5 text-base font-medium tracking-normal dark:text-white  text-gray-700">
        {" "}
        {label}{" "}
      </div>{" "}
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          placeholder={`Enter ${label}`}
          className="px-3 shrink-0 dark:text-black mt-3.5 rounded-lg border border-solid bg-gray-100 bg-opacity-90 border-zinc-800 border-opacity-30 h-[100px]"
          onChange={handler}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={`Enter ${label}`}
          value={value}
          className="pl-3 shrink-0 dark:text-black mt-3.5 rounded-lg border border-solid bg-gray-100 bg-opacity-90 border-zinc-800 border-opacity-30 h-[41px]"
          onChange={handler}
        />
      )}{" "}
      {error !== "" && (
        <span className="text-red-700 font-bold text-wrap">{error}</span>
      )}
    </>
  );
}
