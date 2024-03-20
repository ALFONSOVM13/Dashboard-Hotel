import { Dialog } from "@headlessui/react";
import exampleImg from "./example.jpg";
export default function RoomManagementModal({ isOpen, onClose }) {
  const roomTypes = [
    {
      name: "Presidential Room",
      description: "You must be a President to reserve this room",
      imageUrl: exampleImg,
    },
    {
      name: "Presidential Room",
      description: "You must be a President to reserve this room",
      imageUrl: exampleImg,
    },
    {
      name: "Presidential Room",
      description: "You must be a President to reserve this room",
      imageUrl: exampleImg,
    },
    {
      name: "Presidential Room",
      description: "You must be a President to reserve this room",
      imageUrl: exampleImg,
    },
  ];
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {" "}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />{" "}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {" "}
        <Dialog.Panel className="flex flex-col pt-11 pb-7 bg-white rounded-3xl max-w-[710px]">
          {" "}
          <header className="flex flex-col pl-9 w-full max-md:pl-5 max-md:max-w-full">
            {" "}
            <Dialog.Title className="self-start ml-8 text-4xl font-semibold tracking-wide text-neutral-500 max-md:max-w-full">
              {" "}
              Room Type Management{" "}
            </Dialog.Title>{" "}
            <hr className="shrink-0 mt-3 h-px bg-black border border-black border-solid max-md:max-w-full" />{" "}
            <button className="justify-center self-end px-5 py-2 mt-4 mr-7 text-base font-bold tracking-tight leading-6 text-center text-white bg-blue-600 rounded-md max-md:mr-2.5">
              {" "}
              New Room Type{" "}
            </button>{" "}
          </header>{" "}
          <main className="flex flex-col pr-6 pl-16 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
            {" "}
            <div className="max-md:max-w-full">
              {" "}
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {" "}
                <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                  {" "}
                  <div className="flex flex-col max-md:mt-3 max-md:max-w-full">
                    {" "}
                    <div className="flex gap-5 w-full text-xs tracking-normal max-md:flex-wrap max-md:max-w-full">
                      {" "}
                      <div className="flex flex-col grow shrink-0 justify-center rounded-xl basis-0 text-slate-400 w-fit">
                        {" "}
                        <div className="flex gap-3 items-start px-9 pt-5 pb-3 bg-white rounded-xl border border-solid border-black border-opacity-20 max-md:px-5">
                          {" "}
                          <img
                            loading="lazy"
                            src="{{ext_16}}"
                            alt=""
                            className="shrink-0 w-5 aspect-square"
                          />{" "}
                          <div className="flex-auto mt-1">
                            {" "}
                            Room Type, Description{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex gap-4 my-auto text-gray-500 whitespace-nowrap">
                        {" "}
                        <div className="grow">Showing</div>{" "}
                        <div className="font-bold">0-10</div> <div>of</div>{" "}
                        <div className="font-bold">30</div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="mt-7 max-md:pr-5 max-md:max-w-full">
                      {" "}
                      {roomTypes.map((roomType, index) => (
                        <RoomTypeDetails
                          key={index}
                          name={roomType.name}
                          description={roomType.description}
                        />
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <aside className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                  {" "}
                  <div className="flex flex-col grow items-center mt-4 text-base font-medium tracking-normal text-black max-md:mt-7">
                    {" "}
                    <div className="flex flex-col items-center self-stretch pr-1.5 pl-3">
                      {" "}
                      <img
                        loading="lazy"
                        src="{{ext_17}}"
                        alt="Room type 1"
                        className="w-28 aspect-[4.35]"
                      />{" "}
                      <div className="mt-10">IMAGE URL</div>{" "}
                    </div>{" "}
                    {roomTypes.map((roomType, index) => (
                      <img
                        key={index}
                        loading="lazy"
                        src={roomType.imageUrl}
                        alt={`Room type ${index + 2}`}
                        className="mt-5 w-32 aspect-[1.52]"
                      />
                    ))}{" "}
                  </div>{" "}
                </aside>{" "}
              </div>{" "}
            </div>{" "}
            <button
              onClick={onClose}
              className="justify-center self-end px-16 py-4 mt-12 text-base font-semibold tracking-normal text-center text-white whitespace-nowrap bg-amber-700 rounded shadow-sm max-md:px-5 max-md:mt-10"
            >
              {" "}
              Exit{" "}
            </button>{" "}
          </main>{" "}
        </Dialog.Panel>{" "}
      </div>{" "}
    </Dialog>
  );
}
function RoomTypeDetails({ name, description }) {
  return (
    <div className="flex gap-5 mt-16 text-base font-medium tracking-normal text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      {" "}
      <div className="flex-auto self-start">{name}</div>{" "}
      <div className="flex-auto">{description}</div>{" "}
    </div>
  );
}
