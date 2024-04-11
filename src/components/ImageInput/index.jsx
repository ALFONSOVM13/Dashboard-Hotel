import React from "react";
import Swal from "sweetalert2";

function ImageInput({
  photoUrl,
  setPhotoUrl,
  setFieldValue,
  handleCloseModal,
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img
          loading="lazy"
          src={photoUrl}
          className="self-center max-w-full rounded-full border-2 border-solid aspect-square border-black border-opacity-30 w-[174px]"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter image URL"
          onChange={(e) => setPhotoUrl(e.target.value)}
          className="border mt-4 mr-4 ml-4 py-2 px-3   text-gray-700 bg-white rounded-md"
        />
      </div>
      <div>
        <button
          onClick={() => {
            setFieldValue("photo_url", photoUrl);
            Swal.fire({
              icon: "success",
              title: "Photo saved successfully",
            });
            handleCloseModal();
          }}
          className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Acept
        </button>
        <button
          className="px-4 m-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => {
            Swal.fire({
              icon: "warning",
              title: "Photo not saved",
            });
            handleCloseModal();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ImageInput;
