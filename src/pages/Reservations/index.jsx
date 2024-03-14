import TabTitle from "../../components/TabTitle";

function Reservations() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-5 w-full max-md:max-w-full">
        <TabTitle title="Reserved Rooms" />
        <div className="flex gap-3 px-9 py-5 mt-14 text-xs tracking-normal bg-white text-slate-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2a6dbba5d860a59939c495c0fc43844a78a9d4388e98de3cfa2e35be663b20?"
            className="shrink-0 w-5 aspect-square"
          />
          <div className="flex-auto my-auto max-md:max-w-full">
            Room #, Room Name, Date
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <div className="flex z-10 flex-col ml-3 max-w-full w-[283px] max-md:ml-2.5">
          <div className="justify-center self-center px-4 py-4 text-base tracking-normal text-center text-white whitespace-nowrap rounded shadow-sm bg-blue-950">
            New Reservation
          </div>
          <div className="flex gap-5 justify-between pr-5 mt-14 text-xl tracking-wide text-black capitalize max-md:mt-10">
            <div>Room #</div>
            <div className="flex-auto">Guest Username</div>
          </div>
        </div>
        <div className="flex z-10 gap-3.5 items-center self-end mt-0 mr-16 text-xs tracking-normal text-gray-500 whitespace-nowrap max-md:mr-2.5">
          <div className="grow self-stretch my-auto">Showing</div>
          <div className="self-stretch my-auto font-bold">20-30</div>
          <div className="self-stretch my-auto">of</div>
          <div className="self-stretch my-auto font-bold">1233</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7851b68a5f8e7551ebaae32fca51b3cb3d8db144600473bfebb6246c8b3764b2?"
            className="shrink-0 self-stretch w-28 max-w-full aspect-[4.35]"
          />
        </div>
        <div className="flex gap-2.5 self-center mt-0 text-xs tracking-normal whitespace-nowrap">
          <div className="grow text-gray-500">Show results by:</div>
          <div className="text-sky-500">10</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b834403ec30943ade687ba10871ed3dd113d3c7469decfa971c2bba0aba43b8?"
            className="shrink-0 my-auto aspect-[2.33] fill-zinc-400 w-[7px]"
          />
        </div>
        <div className="flex gap-5 justify-between self-end pr-5 mt-16 max-w-full text-xl tracking-wide text-black capitalize whitespace-nowrap w-[272px] max-md:mt-10 max-md:mr-2.5">
          <div className="flex-auto">Check-Out</div>
          <div>Actions</div>
        </div>
        <div className="flex z-10 gap-5 justify-between self-center mt-0 max-w-full text-xl tracking-wide text-black capitalize w-[315px]">
          <div className="flex-auto">Room Name</div>
          <div>Check-In</div>
        </div>
      </div>
      <div className="flex flex-col self-center mt-6 w-full text-base tracking-normal text-center capitalize max-w-[1044px] max-md:max-w-full">
        <div className="flex flex-col pr-px pl-10 mt-6 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-md:flex-wrap">
            <div className="flex flex-auto gap-5 justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">412</div>
              <div className="self-stretch my-auto">Hector Hugo</div>
              <div className="flex-auto self-stretch my-auto">
                Presidential Room
              </div>
              <div className="self-stretch">
                03/03/2024
                <br />
                14:00:00
              </div>
              <div className="self-stretch">
                04/03/2024
                <br />
                18:00:00
              </div>
            </div>
            <div className="flex gap-3 self-start mt-1.5 font-semibold text-white">
              <div className="grow justify-center px-4 py-2.5 bg-green-600 rounded-md shadow-sm">
                Edit{" "}
              </div>
              <div className="grow justify-center px-3 py-2.5 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm">
                Release
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
            <div className="flex flex-auto gap-5 justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">413</div>
              <div className="self-stretch my-auto">Hector Hugo</div>
              <div className="flex-auto self-stretch my-auto">
                Matrimonial Room
              </div>
              <div className="self-stretch">
                02/03/2024
                <br />
                14:00:00
              </div>
              <div className="self-stretch">
                05/03/2024
                <br />
                14:00:00
              </div>
            </div>
            <div className="flex gap-3 self-start mt-1.5 font-semibold text-white">
              <div className="grow justify-center px-4 py-2.5 bg-green-600 rounded-md shadow-sm">
                Edit{" "}
              </div>
              <div className="grow justify-center px-3 py-2.5 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm">
                Release
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
            <div className="flex flex-auto gap-5 justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">414</div>
              <div className="self-stretch my-auto">Hector Hugo</div>
              <div className="flex-auto self-stretch my-auto">
                Presidential Room
              </div>
              <div className="self-stretch">
                03/03/2024
                <br />
                14:00:00
              </div>
              <div className="self-stretch">
                04/03/2024
                <br />
                18:00:00
              </div>
            </div>
            <div className="flex gap-3 self-start mt-1.5 font-semibold text-white">
              <div className="grow justify-center px-4 py-2.5 bg-green-600 rounded-md shadow-sm">
                Edit{" "}
              </div>
              <div className="grow justify-center px-3 py-2.5 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm">
                Release
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
            <div className="flex flex-auto gap-5 justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">415</div>
              <div className="self-stretch my-auto">Hector Hugo</div>
              <div className="flex-auto self-stretch my-auto">
                Presidential Room
              </div>
              <div className="self-stretch">
                03/03/2024
                <br />
                14:00:00
              </div>
              <div className="self-stretch">
                04/03/2024
                <br />
                18:00:00
              </div>
            </div>
            <div className="flex gap-3 self-start mt-1.5 font-semibold text-white">
              <div className="grow justify-center px-4 py-2.5 bg-green-600 rounded-md shadow-sm">
                Edit{" "}
              </div>
              <div className="grow justify-center px-3 py-2.5 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm">
                Release
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
            <div className="flex flex-auto gap-5 justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">501</div>
              <div className="self-stretch my-auto">Hector Hugo</div>
              <div className="flex-auto self-stretch my-auto">
                Presidential Room
              </div>
              <div className="self-stretch">
                03/03/2024
                <br />
                14:00:00
              </div>
              <div className="self-stretch">
                04/03/2024
                <br />
                18:00:00
              </div>
            </div>
            <div className="flex gap-3 self-start mt-1.5 font-semibold text-white">
              <div className="grow justify-center px-4 py-2.5 bg-green-600 rounded-md shadow-sm">
                Edit{" "}
              </div>
              <div className="grow justify-center px-3 py-2.5 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm">
                Release
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
            <div className="flex flex-auto gap-5 justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">502</div>
              <div className="self-stretch my-auto">Hector Hugo</div>
              <div className="flex-auto self-stretch my-auto">
                Presidential Room
              </div>
              <div className="self-stretch">
                03/03/2024
                <br />
                14:00:00
              </div>
              <div className="self-stretch">
                04/03/2024
                <br />
                18:00:00
              </div>
            </div>
            <div className="flex gap-3 self-start mt-1.5 font-semibold text-white">
              <div className="grow justify-center px-4 py-2.5 bg-green-600 rounded-md shadow-sm">
                Edit{" "}
              </div>
              <div className="grow justify-center px-3 py-2.5 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm">
                Release
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
            <div className="flex flex-auto gap-5 justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">503</div>
              <div className="self-stretch my-auto">Hector Hugo</div>
              <div className="flex-auto self-stretch my-auto">
                Presidential Room
              </div>
              <div className="self-stretch">
                03/03/2024
                <br />
                14:00:00
              </div>
              <div className="self-stretch">
                04/03/2024
                <br />
                18:00:00
              </div>
            </div>
            <div className="flex gap-3 self-start mt-1.5 font-semibold text-white">
              <div className="grow justify-center px-4 py-2.5 bg-green-600 rounded-md shadow-sm">
                Edit{" "}
              </div>
              <div className="grow justify-center px-3 py-2.5 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm">
                Release
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
            <div className="flex flex-auto gap-5 justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">601</div>
              <div className="self-stretch my-auto">Hector Hugo</div>
              <div className="flex-auto self-stretch my-auto">
                Presidential Room
              </div>
              <div className="self-stretch">
                03/03/2024
                <br />
                14:00:00
              </div>
              <div className="self-stretch">
                04/03/2024
                <br />
                18:00:00
              </div>
            </div>
            <div className="flex gap-3 self-start mt-1.5 font-semibold text-white">
              <div className="grow justify-center px-4 py-2.5 bg-green-600 rounded-md shadow-sm">
                Edit{" "}
              </div>
              <div className="grow justify-center px-3 py-2.5 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm">
                Release
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
