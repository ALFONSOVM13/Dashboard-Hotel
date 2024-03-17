import ListCategory from "../../ListCategory";
import ListOption from "../../ListOption";
import ProfileDock from "../../ProfileDock";
import { useRef } from "react";

function Sidebar({ controlador }) {
  return (
    <div
      className="fixed transition-all duration-500 flex flex-col py-6 bg-white shadow-sm w-[30%] lg:w-[20%] self-start top-0 bottom-0 h-full z-100 md:text-2xl"
      ref={controlador}
    >
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
        <ListOption
          text={"Restaurant"}
          link={"/dashboard/restaurantMenu"}
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
