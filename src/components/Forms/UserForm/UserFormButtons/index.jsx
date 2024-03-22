import React from "react";

function UserFormButtons({ isSubmitting }) {
  return (
    <div className="flex gap-5 justify-around items-center mb-9 self-start mt-11 text-base font-semibold tracking-normal text-center text-white whitespace-nowrap max-md:mt-10">
      <div className="flex gap-5 items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex flex-col flex-1 justify-center bg-white hover:border-none"
        >
          <div className="justify-center px-14 py-4 bg-green-800 rounded shadow-sm max-md:px-5">
            Save
          </div>
        </button>
        <button className="flex flex-col flex-1 justify-center bg-white hover:border-none">
          <div className="justify-center px-12 py-4 bg-orange-900 rounded shadow-sm max-md:px-5">
            Cancel
          </div>
        </button>
      </div>

      <button className="flex gap-2.5 justify-center self-center text-xl bg-white font-extrabold text-orange-600 hover:border-none">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fc9f12c2892fdc289ca967d39a7cd448dc0e15d344267e20af9cd38e3f3f6f9?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
          className="shrink-0 w-11 aspect-square"
        />
        <div>DELETE GUEST</div>
      </button>
    </div>
  );
}

export default UserFormButtons;
