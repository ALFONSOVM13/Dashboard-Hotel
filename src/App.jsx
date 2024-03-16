import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Guests from "./pages/Guests";
import Reservations from "./pages/Reservations";
import Offers from "./pages/Offers";
import Sidebar from "./components/layouts/sidebar";
import Employees from "./pages/Employees";
import RoomsCustomization from "./pages/RoomsCustomization";
import OfferNotifications from "./pages/OfferNotifications";
import Notifications from "./pages/Notifications";
import RestaurantMenu from "./pages/RestaurantMenu";
import { useRef } from "react";

function App() {
  const sideBar = useRef();
  const tabcontent = useRef();

  const handleMenu = (e) => {
    let screenWidth = window.innerWidth;
    let sidebar = sideBar.current;
    let tabContent = tabcontent.current;

    if (screenWidth < 700) {
      sidebar.classList.remove("left-0");
      sidebar.classList.add("left-[-300px]");
      tabContent.classList.remove("pl-[300px]");
      tabContent.classList.add("pl-0");
    } else {
      sidebar.classList.remove("left-[-300px]");
      sidebar.classList.add("left-0");
      tabContent.classList.remove("pl-0");
      tabContent.classList.add("pl-[300px]");
    }
  };

  window.addEventListener("resize", handleMenu);
  return (
    // <Provider store={store}>
    <div className="flex">
      <Sidebar controlador={sideBar} />
      <div
        ref={tabcontent}
        className="flex flex-col w-full pl-[300px] transition-all duration-500 ease-in-out"
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="dashboard">
            <Route path="guests" element={<Guests />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="offers" element={<Offers />} />
            <Route path="employees" element={<Employees />} />
            <Route path="roomsCustomization" element={<RoomsCustomization />} />
            <Route path="offerNotifications" element={<OfferNotifications />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="restaurantMenu" element={<RestaurantMenu />} />
          </Route>
        </Routes>
      </div>
    </div>
    // </Provider>
  );
}

export default App;
