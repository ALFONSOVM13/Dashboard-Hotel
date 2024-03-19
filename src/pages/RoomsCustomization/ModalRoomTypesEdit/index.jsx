import * as React from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import DeleteTrashButton from "../../../components/DeleteTrashButton";
import { useState, useEffect } from "react";

export default function ModalRoomTypesEdit({ control, id }) {
  const [inputs, setInputs] = useState({ name: "", description: "" });
  const [data, setData] = useState({});
  const [error, setError] = useState({ name: "", description: "" });
  const closeModal = (e) => {
    e.preventDefault();
    control(false);
  };
  const saveChanges = (e) => {
    const errors = { name: "", description: "" };
    e.preventDefault();
    //Validation
    if (inputs.name.trim() === "") errors.name = "Type is required.";
    else if (inputs.name.length < 5)
      errors.name = "Type must be at least 5 characters long.";
    if (inputs.description.trim() === "")
      errors.description = "Description is required";
    else if (inputs.description.trim().length < 10)
      errors.description = "Description must be at least 10 characters long.";
    setError({ ...errors });
    console.log(errors);
    if (errors.name !== "" || errors.description !== "") return;
    control(false);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/roomTypes?id=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setInputs({ ...result[0] });
        setData({ ...result[0] });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setError((prevValue) => ({
      ...prevValue,
      [e.target.name]: "",
    }));
    setInputs((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className="fixed flex items-center justify-center z-[100] inset-0">
      {" "}
      <div className="flex flex-col px-16 py-9 bg-white rounded-3xl max-w-[626px] max-md:px-5 shadow-md shadow-slate-600">
        {" "}
        <h1 className="text-4xl font-semibold tracking-wide text-neutral-500 max-md:max-w-full">
          {" "}
          Room Type Customization
        </h1>{" "}
        <div className="mt-7 max-md:max-w-full">
          {" "}
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {" "}
            <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
              {" "}
              <div className="flex flex-col grow text-base font-medium tracking-normal text-gray-700 max-md:mt-10">
                {" "}
                <InputField
                  label="Room Type Name"
                  name={"name"}
                  value={inputs.name}
                  handler={handleChange}
                  error={error.name}
                />{" "}
                <InputField
                  label="Description"
                  name={"description"}
                  value={inputs.description}
                  handler={handleChange}
                  error={error.description}
                />{" "}
              </div>{" "}
            </div>{" "}
            <DeleteTrashButton data={data} control={closeModal} />
          </div>{" "}
        </div>{" "}
        <div className="flex gap-5 self-center mt-14 text-base font-semibold tracking-normal text-center text-white max-md:mt-10">
          {" "}
          <div className="flex flex-col flex-1 justify-center">
            {" "}
            <Button className="bg-indigo-900" action={saveChanges}>
              Save Changes
            </Button>{" "}
          </div>{" "}
          <div className="flex flexcol flex-1 justify-center whitespace-nowrap">
            {" "}
            <Button
              className="bg-amber-700 px-12 py-4 max-md:px-5"
              action={closeModal}
            >
              {" "}
              Cancel{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
