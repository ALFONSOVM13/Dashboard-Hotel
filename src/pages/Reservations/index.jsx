import Button from "../../components/Button";
import PaginationControl from "../../components/PaginationControl";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";

function Reservations() {
  return (
    <div className="flex flex-col w-full pl-[330px]">
      <div className="flex flex-col px-5 w-full max-md:max-w-full">
        <TabTitle title="Reserved Rooms" />
        <div className="flex gap-3 px-9 py-5 mt-14 text-xs tracking-normal bg-white text-slate-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2a6dbba5d860a59939c495c0fc43844a78a9d4388e98de3cfa2e35be663b20?"
            className="shrink-0 w-5 aspect-square"
          />
          <div className="flex-auto my-auto max-md:max-w-full text-left pl-5">
            Room #, Room Name, Date
          </div>
        </div>
      </div>
      <div className="self-start pt-5 pl-5">
        <Button text="New Reservation" />
      </div>
      <div className="flex flex-col px-20 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl />
        <Table
          headers={[
            "Room #",
            "Room Name",
            "Guest Username",
            "Check-in",
            "Check-Out",
            "Actions",
          ]}
          data={[
            [
              1,
              "Presidential Room",
              "Hugo",
              "2024-02-23",
              "2024-02-28",
              "Edit",
            ],
          ]}
        />

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
    </div>
  );
}

export default Reservations;
