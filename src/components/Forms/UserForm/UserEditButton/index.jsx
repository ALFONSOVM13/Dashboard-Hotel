import React from "react";

function UserEditButton({ onClick, id }) {
  return (
    <div>
      <button
        onClick={() => {
          onClick(id);
        }}
        className="w-full block gap-3 font-semibold text-white justify-center p-2 bg-green-600 rounded-md shadow-sm shadow-slate-800"
      >
        Edit{" "}
      </button>
    </div>
  );
}

export default UserEditButton;
