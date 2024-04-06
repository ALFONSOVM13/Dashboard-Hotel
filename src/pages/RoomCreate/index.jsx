import { useParams } from "react-router";
import TabTitle from "../../components/TabTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createRoom } from "../../redux/Rooms/Actions/actions";
import { getAllRoomTypes } from "../../redux/RoomTypes/Actions/actions";
import SelectField from "../../components/SelectField";
import CapacityField from "../../components/CapacityField";
import PriceField from "../../components/PriceField";
import { Switch, RadioGroup } from "@headlessui/react";
import PicSelector from "../../components/PicSelector";
import HotelImages from "../../components/HotelImages";
import SaveCancelButtons from "../../components/SaveCancelButtons";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { all } from "axios";
import PhotoUrlSelector from "../../components/PhotoUrlSelector";
import SaveDontSaveCancel from "../../components/SaveDontSaveCancel";

function RoomCreate() {
  const [errors, setErrors] = useState({});
  const [showSave, setShowSave] = useState(false);
  const initialValues = {
    id: "",
    is_active: true,
    max_capacity: 1,
    photo_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_WXkZhcWSMu1pQzz7wusWgJHIM-n3Yh28_TiWb8j8Q&s",
    price_per_night: 0,
    room_number: "",
    room_type: {
      description: "Not assigned to any room type",
      id: 1,
      name: "Not Assigned",
    },
    services: {
      single_bed: 0,
      double_bed: 0,
      air_conditioning: false,
      jacuzzi: false,
      internet_connection: false,
      tv: false,
      phone: false,
      minibar: false,
    },
    status: "available",
  };
  const [enabled, setEnabled] = useState(true);
  const [status, setStatus] = useState("available");
  const { allRoomTypes } = useSelector((state) => state.roomTypesReducer);
  const [roomData, setRoomData] = useState(initialValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (allRoomTypes.length === 0) {
      dispatch(getAllRoomTypes());
    }
  }, []);

  const validateRoom = () => {
    const errors = {};
    if (roomData.max_capacity < 0 || roomData.max_capacity > 20)
      errors.max_capacity = "Max capacity should be between 1 and 20";
    if (parseFloat(roomData.price_per_night) <= 0)
      errors.price_per_night = "Price per night must be greater than zero";
    if (roomData.room_number.trim() === "")
      errors.room_number = "Room number cannot be empty or only spaces";
    if (roomData.photo_url.trim() === "")
      errors.photo_url = "Photo URL cannot be empty or only spaces";
    if (roomData.status.trim() === "")
      errors.status = "Status field must be selected";
    return errors;
  };

  const handleChange = (e, attrib = "") => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    if (name === "room_type")
      setRoomData({
        ...roomData,
        [name]: allRoomTypes.find((roomType) => roomType.id === Number(value)),
      });
    else if (name.split("_")[0] === "quantitySelector") {
      console.log(attrib, value);
      setRoomData({
        ...roomData,
        services: {
          ...roomData["services"],
          [attrib]: Number(value),
        },
      });
    } else if (name === "services") {
      const actualValue = roomData[name][attrib];
      setRoomData({
        ...roomData,
        [name]: {
          ...roomData[name],
          [attrib]:
            typeof actualValue === "number"
              ? actualValue > 0
                ? 0
                : 1
              : !actualValue,
        },
      });
    } else
      setRoomData({
        ...roomData,
        [name]: value,
      });
  };

  useEffect(() => {
    setRoomData({
      ...roomData,
      is_active: enabled,
    });
  }, [enabled]);

  useEffect(() => {
    setRoomData({
      ...roomData,
      status: status,
    });
  }, [status]);

  useEffect(() => {
    console.log(roomData);
  }, [roomData]);

  const handleSave = (e) => {
    e !== undefined && e.preventDefault();
    try {
      const errors = validateRoom();
      console.log(errors);
      if (Object.keys(errors).length === 0) {
        dispatch(createRoom(roomData));
        navigate(-1);
      } else {
        setShowSave(false);
        setErrors({ ...errors });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className=" w-[95%] mx-auto py-5">
      <TabTitle title={`Rooms Creation`} />
      <div className="p-5 grid grid-cols-2 xl:grid-cols-3 gap-10 grid">
        <div className="flex flex-col w-full px-3 pb-3 border-2 border-[rgba(10,10,10,0.2)] rounded-xl h-fit">
          <InputField
            type="text"
            name="room_number"
            label="Room Number"
            handler={handleChange}
            error={errors.room_number}
          />
          <SelectField
            label={"Room type"}
            name={"room_type"}
            value={roomData.room_type?.id}
            options={allRoomTypes}
            handler={handleChange}
          />
          <p className="mt-5 text-left leading-relaxed">
            <span className="text-md font-bold">Description:</span> <br />
            {roomData.room_type?.description?.slice(0, 120) +
              (roomData.room_type?.description?.length > 117 ? "..." : "")}
          </p>
          <PhotoUrlSelector
            error={errors.photo_url}
            handler={handleChange}
            name={"photo_url"}
            value={roomData.photo_url}
          />
        </div>
        <div>
          <div className="flex w-full gap-2 lg:gap-5 pb-3 px-3 border-2 border-[rgba(10,10,10,0.2)] rounded-xl h-fit">
            <div className="flex flex-col w-1/2 text-nowrap">
              <CapacityField
                label={"Max Capacity"}
                name={"max_capacity"}
                handler={handleChange}
                range={[1, 20]}
                value={roomData.max_capacity}
                error={errors.max_capacity}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <PriceField
                label={"Price Per Night"}
                name={"price_per_night"}
                handler={handleChange}
                value={roomData.price_per_night}
                error={errors.price_per_night}
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-5 pb-3 px-3 border-2 border-[rgba(10,10,10,0.2)] rounded-xl h-fit">
            <span className="font-bold">Services</span>
            <div className="grid gap-5 grid-cols-3 relative mt-5 w-full">
              {Object.keys(roomData.services).map((item, i) => (
                <div key={"HI" + item + i} className="mx-auto">
                  <label htmlFor={"services" + item}>
                    <HotelImages
                      image={item}
                      size={"sm"}
                      value={roomData.services[item]}
                      all={true}
                    />
                  </label>
                  {typeof roomData.services[item] === "number" && (
                    <input
                      type="number"
                      value={roomData.services[item]}
                      name={"quantitySelector_" + item}
                      step="1"
                      min={1}
                      max={5}
                      className="absolute top-[10px] ml-9 w-[50px] p-1 rounded-md border-2 border-slate-600"
                      onChange={(e) => handleChange(e, item)}
                    />
                  )}
                  <input
                    type="checkbox"
                    name={"services"}
                    id={"services" + item}
                    checked={
                      roomData.services[item] > 0 || roomData.services[item]
                    }
                    onChange={(e) => handleChange(e, item)}
                    className="w-[17px] h-[17px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 mx-auto p-5 border-2 border-[rgba(10,10,10,0.2)] rounded-xl h-fit">
          <div className="flex justify-between w-full">
            <span className="font-bold block mb-5">
              Room {enabled ? "Active" : "Inactive"}
            </span>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              name={"is_active"}
              className={`${
                enabled ? "bg-green-600" : "bg-red-600"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="flex flex-col justify-between items-start text-left select-none">
            <RadioGroup value={status} onChange={setStatus}>
              <RadioGroup.Label className="font-bold block mb-5">
                Room Status
              </RadioGroup.Label>
              <RadioGroup.Option value="available">
                {({ checked }) => (
                  <span
                    className={`${
                      checked
                        ? "p-3 dark:text-black bg-green-200 hover:bg-green-300"
                        : "p-3 hover:bg-[rgba(10,10,10,0.1) dark:hover:bg-[rgba(255,255,255,0.1)]"
                    } w-[150px] rounded-md hover:bg-[rgba(10,10,10,0.1) py-2 transition-all ease-in-out duration-200 cursor-pointer block`}
                  >
                    Available
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="maintenance">
                {({ checked }) => (
                  <span
                    className={`${
                      checked
                        ? "p-3 dark:text-black bg-yellow-200 hover:bg-yellow-300"
                        : "p-3 hover:bg-[rgba(10,10,10,0.1) dark:hover:bg-[rgba(255,255,255,0.1)]"
                    } w-[150px] rounded-md hover:bg-[rgba(10,10,10,0.1)  py-2 transition-all ease-in-out duration-200 cursor-pointer block`}
                  >
                    Maintenance
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="busy">
                {({ checked }) => (
                  <span
                    className={`${
                      checked
                        ? "p-3 dark:text-black bg-red-200 hover:bg-red-300 dark:hover:bg-red-300"
                        : "p-3 hover:bg-[rgba(10,10,10,0.1) dark:hover:bg-[rgba(255,255,255,0.1)]"
                    } w-[150px] rounded-md hover:bg-[rgba(10,10,10,0.1)  py-2 transition-all ease-in-out duration-200 cursor-pointer block`}
                  >
                    Busy
                  </span>
                )}
              </RadioGroup.Option>
            </RadioGroup>
          </div>
        </div>
      </div>
      {showSave && (
        <SaveDontSaveCancel
          onSave={handleSave}
          onCancel={() => setShowSave(false)}
        />
      )}
      <SaveCancelButtons
        saveHandler={() => setShowSave(true)}
        cancelHandler={handleCancel}
      />
    </div>
  );
}

export default RoomCreate;
