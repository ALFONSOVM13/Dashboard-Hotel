import React, { useEffect, useState } from "react";
import NoImage from "./NoImage.png";

const MultiPhotoUrlSelector = ({
  className,
  error,
  handler,
  label,
  name,
  value = [],
}) => {
  const [selectedImages, setSelectedImages] = useState();
  const [newImage, setNewImage] = useState("");
  const [preview, setPreview] = useState("");

  const handleImageChange = (event) => {
    const { name, value } = event.target;
    if (name === "new") {
      setNewImage(value);
      return;
    } else {
      setSelectedImages([
        ...selectedImages.map((image, index) =>
          index === Number(name) ? value : image
        ),
      ]);
    }
    setPreview(value);
  };

  useEffect(() => {
    setSelectedImages(value);
  }, []);

  const previewHandle = (e) => {
    e.target.style.border = "2px solid red";
    setPreview(e.target.value);
  };

  const unSelect = (e) => {
    e.target.style.border = "";
  };

  const removeImg = (index) => {
    const newArray = [...selectedImages];
    console.log(index);
    newArray.splice(index, 1);
    setSelectedImages([...newArray]);
  };

  const addImg = (e) => {
    if (selectedImages && selectedImages.length > 0)
      setSelectedImages([...selectedImages, newImage]);
    else setSelectedImages([newImage]);
    setNewImage("");
  };

  useEffect(() => {
    if (selectedImages && selectedImages.length > 0 && preview !== "")
      setPreview(selectedImages[0]);
    handler({ target: { name: "photos", value: selectedImages } });
  }, [selectedImages]);

  return (
    <div className=" flex flex-col">
      <div className="text-left mt-5 text-base font-medium tracking-normal dark:text-white  text-gray-700">
        Add another pictures.
      </div>
      {
        <div
          className={`mx-auto img-container w-[200px] h-[200px] bg-cover rounded-xl border-slate-400 border my-3`}
          style={{
            backgroundImage: `url(${preview === "" ? NoImage : preview})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
      }
      {selectedImages?.length > 0 &&
        selectedImages.map((img, index) => (
          <div key={"Imagen" + index} className="flex gap-3 items-center">
            <input
              type="text"
              onChange={handleImageChange}
              placeholder="Insert the photo url"
              name={index}
              value={selectedImages[index]}
              onFocus={previewHandle}
              onBlur={unSelect}
              onMouseOver={previewHandle}
              onMouseLeave={unSelect}
              className="pl-3 w-[60%] my-5 rounded-lg border border-solid dark:text-black bg-gray-100 bg-opacity-90 border-zinc-800 border-opacity-30 h-[41px]"
            />
            <button
              onClick={() => removeImg(index)}
              className="px-3 py-0 block bg-red-500 font-bold text-lg h-9 leading-none text-white"
            >
              Remove
            </button>
          </div>
        ))}

      <div className="flex gap-3 items-center">
        <input
          type="text"
          onChange={handleImageChange}
          placeholder="Insert the photo url"
          name={"new"}
          value={newImage}
          className="pl-3 w-[70%] mt-5 rounded-lg border border-solid dark:text-black bg-gray-100 bg-opacity-90 border-zinc-800 border-opacity-30 h-[41px] mb-5"
          onMouseOver={previewHandle}
          onFocus={previewHandle}
          onBlur={unSelect}
          onMouseLeave={unSelect}
        />
        <button
          onClick={addImg}
          className="px-3 py-0 block bg-green-500 font-bold text-lg h-9 leading-none text-white"
        >
          Add
        </button>
      </div>
      {error !== "" && <span className="text-red-700 font-bold">{error}</span>}
    </div>
  );
};

export default MultiPhotoUrlSelector;
