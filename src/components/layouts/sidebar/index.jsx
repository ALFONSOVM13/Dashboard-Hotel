import ListOption from "../../ListOption";

function Sidebar() {
  return (
    <div className=" flex flex-col py-6 bg-white shadow-sm w-[350px] self-start">
      <div className="flex flex-col items-left px-6 w-full">
        <div className="self-stretch text-lg font-semibold text-sky-500">
          Hotel Esmeralda Resort
          <br />& Spa
        </div>
        <div className="flex gap-4 self-stretch mt-5 font-medium">
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 aspect-square w-[46px]"
          />
          <div className="flex flex-col flex-1 my-auto">
            <div className="text-sm text-slate-800">Manuel </div>
            <div className="mt-3 text-xs tracking-normal text-slate-400">
              Manuel@email.com
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 self-stretch mt-10 text-sm font-medium tracking-normal whitespace-nowrap text-slate-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a39514a42fa72252b4f8956df84f44e94a54bc0b2153a4af7784431898077c7?"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="grow self-start">Portal Customization</div>
        </div>
        <div className="flex gap-2.5 self-stretch mt-4 text-sm font-medium tracking-normal text-sky-500 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b700104b38e786c794c4fdae501edf1cac42e1ea6d5f6a04f10abeddaee860fa?"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="grow my-auto">Manage</div>
        </div>
        <ListOption text={"Guest"} link={"/dashboard/guests"} active={true} />
        <ListOption
          text={"Reserved Rooms"}
          link={"/dashboard/reservations"}
          active={false}
        />
        <ListOption text={"Offers"} link={"/dashboard/offers"} active={false} />
        <ListOption
          text={"Employees"}
          link={"/dashboard/employees"}
          active={false}
        />
        <ListOption
          text={"Rooms Customization"}
          link={"/dashboard/roomsCustomization"}
          active={false}
        />
        <div className="flex gap-2.5 self-stretch mt-9 text-sm font-medium tracking-normal whitespace-nowrap text-slate-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ecdbbb4cf8473c9267553bb72eb0afacc0352577565efd9b84b11b5c88d66c1?"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="grow my-auto">Messaging</div>
        </div>
        <div className="flex gap-2 mt-3.5 text-sm tracking-normal whitespace-nowrap text-slate-600 w-[97px]">
          <div className="shrink-0 self-start w-2 h-2 rounded-full border-2 border-amber-300 border-solid stroke-[2px]" />
          <div>Offers</div>
        </div>
        <div className="flex gap-2 mt-5 text-sm tracking-normal whitespace-nowrap text-slate-600 w-[97px]">
          <div className="shrink-0 self-start w-2 h-2 rounded-full border-2 border-green-400 border-solid stroke-[2px]" />
          <div>Notifications</div>
        </div>
      </div>
      <div className="mt-28 w-full bg-gray-100 min-h-[1px]" />
      <div className="flex gap-3.5 self-start mt-80 ml-7 text-xs font-medium tracking-normal whitespace-nowrap text-slate-400">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/568cc6e8cc8e695d62b9bbed4f4a9d6d6a57d51c61a04d2e8bc688648dea7e1e?"
          className="shrink-0 w-3.5 aspect-square"
        />
        <div className="flex-auto">hector@email.com</div>
      </div>
    </div>
  );
}

export default Sidebar;
