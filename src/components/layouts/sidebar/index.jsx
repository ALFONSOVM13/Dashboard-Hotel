import DarkModeButton from "../../DarkModeButton";
import ListCategory from "../../ListCategory";
import ListOption from "../../ListOption";
import LogoutButton from "../../LogoutButton";
import ProfileDock from "../../ProfileDock";

function Sidebar({ controlador, darkMode, toogleDarkMode }) {
  return (
    <div
      id="sidebar"
      className="fixed transition-all duration-300 flex flex-col py-6 bg-white dark:bg-[rgba(15,15,15,0.8)] shadow-sm w-[300px]  self-start top-0 bottom-0 h-full z-100 md:text-2xl overflow-y-auto"
      ref={controlador}
    >
      <div className="flex flex-col items-left px-6 w-full">
        <div className="flex gap-5 items-center justify-between">
          <DarkModeButton darkMode={darkMode} setDarkMode={toogleDarkMode} />
          <LogoutButton />
        </div>
        <hr className="my-5 border-gray-900 dark:border-gray-200" />
        <div className="self-stretch text-lg font-semibold text-sky-500 text-left pl-4">
          Hotel Esmeralda Resort & Spa
        </div>

        <ProfileDock />
        {/* <ListCategory text="Portal Customization" icon="mosaic" /> */}
        <ListCategory text="Manage" />
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
        <ListOption
          text={"Services"}
          link={"/dashboard/services"}
          active={false}
        />
        <ListCategory text="Analitycs" />
        <ListOption text="Dash Board" link={"/dashboard/home"} active={false} />
        <ListCategory text="Messaging" />
        {/* <ListOption
          text={"Offers Notifications"}
          link={"/dashboard/offerNotifications"}
          active={false}
        /> */}
        <ListOption
          text={"Chats"}
          link={"/dashboard/notifications"}
          active={false}
        />
      </div>
    </div>
  );
}

export default Sidebar;
