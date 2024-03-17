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
import EditReservation from "./pages/Reservations/EditReservation";
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
      tabContent.classList.remove("pl-[30%]");
      tabContent.classList.add("pl-0");
    } else {
      sidebar.classList.remove("left-[20%]");
      sidebar.classList.add("left-0");

      tabContent.classList.remove("pl-0");
      tabContent.classList.add("pl-[30%]");
    }
  };

  window.addEventListener("resize", handleMenu);
  return (
    // <Provider store={store}>
    <div className="flex">
      <Sidebar controlador={sideBar} />
      <div
        ref={tabcontent}
        className="flex justify-start min-h-screen flex-col w-full pl-[30%] lg:pl-[20%] transition-all duration-500 ease-in-out"
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="dashboard">
            <Route path="guests" element={<Guests />} />
            <Route path="reservations" element={<Reservations />} />
            <Route
              path="reservations/:reservationId"
              element={<EditReservation />}
            />
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
