import React from "react";

function SaveCancelButtons({ saveHandler, cancelHandler }) {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5">
      <button
        type="submit"
        className="btn btn-primary mt-4 w-full md:w-fit bg-green-700 text-white p-3 mb-10"
        onClick={saveHandler}
      >
        Save Changes
      </button>
      <button
        className="btn btn-primary mt-4 w-full md:w-fit bg-red-700 text-white p-3 mb-10"
        onClick={cancelHandler}
      >
        Cancel
      </button>
    </div>
  );
}

export default SaveCancelButtons;
