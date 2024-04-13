import React, { useState } from "react";

const PicSelector = ({ className, error, handler }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files);
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <div className="text-left my-7 text-base font-medium tracking-normal dark:text-white  text-gray-700">
        Main Room Picture
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full text-ellipsis"
      />
      {selectedImage && (
        <div
          className={`img-container w-[200px] h-[200px] bg-cover rounded-xl border-slate-400 border my-3`}
          style={{ backgroundImage: `url(${selectedImage})` }}
        ></div>
      )}
      {error !== "" && <span className="text-red-700 font-bold">{error}</span>}
    </div>
  );
};

export default PicSelector;
