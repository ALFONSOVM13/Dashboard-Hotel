import { useNavigate } from "react-router-dom";

export default function Item() {
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="bg-[rgb(103,211,87)] py-3 px-5 uppercase font-bold text-white"
      >
        Back
      </button>
    </>
  );
}
