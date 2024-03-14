import ListCategory from "../../ListCategory";
import ListOption from "../../ListOption";
import ProfileDock from "../../ProfileDock";

function Sidebar() {
  return (
    <div className=" flex flex-col py-6 bg-white shadow-sm w-[350px] self-start h-screen">
      <div className="flex flex-col items-left px-6 w-full">
        <div className="self-stretch text-lg font-semibold text-sky-500 text-left pl-4">
          Hotel Esmeralda Resort & Spa
        </div>

        <ProfileDock name="Luis Alberto" email="luiluego@gmail.com" />
        <ListCategory text="Portal Customization" icon="mosaic" />
        <ListCategory text="Manage" icon="hamburguer" />
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

        <ListCategory text="Messaging" icon="mail" />
        <ListOption
          text={"Offers Notifications"}
          link={"/dashboard/offerNotifications"}
          active={false}
        />
        <ListOption
          text={"Notifications"}
          link={"/dashboard/notifications"}
          active={false}
        />
      </div>
    </div>
  );
}

export default Sidebar;
