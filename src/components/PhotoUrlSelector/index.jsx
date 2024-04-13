import React, { useEffect, useState } from "react";

const PhotoUrlSelector = ({
  className,
  error,
  handler,
  label,
  name,
  value,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const { name, value } = event.target;
    setSelectedImage(value);
    handler({ target: { name, value } });
  };

  useEffect(() => {
    setSelectedImage(value);
  }, [value]); // eslint-disable

  return (
    <div className=" flex flex-col">
      <div className="text-left mt-5 text-base font-medium tracking-normal dark:text-white  text-gray-700">
        Main Room Picture
      </div>
      <input
        type="text"
        onChange={handleImageChange}
        placeholder="Insert the photo url"
        name={name}
        value={value}
        className="pl-3 shrink-0 mt-3.5 rounded-lg border border-solid dark:text-black bg-gray-100 bg-opacity-90 border-zinc-800 border-opacity-30 h-[41px] mb-5"
      />
      {selectedImage && (
        <div
          className={`mx-auto img-container w-[200px] h-[200px] bg-cover rounded-xl border-slate-400 border my-3`}
          style={{ backgroundImage: `url(${selectedImage})` }}
        ></div>
      )}
      {error !== "" && <span className="text-red-700 font-bold">{error}</span>}
    </div>
  );
};

export default PhotoUrlSelector;
