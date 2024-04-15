import { useNavigate } from "react-router-dom";

export default function Item() {
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="self-end bg-[rgb(56,114,47)] py-3 px-5 uppercase font-bold text-white shadow-emerald-900 shadow-md"
      >
        Back
      </button>
    </>
  );
}
