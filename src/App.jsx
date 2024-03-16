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

function App() {
  return (
    // <Provider store={store}>
    <div className="flex">
      <Sidebar />
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
    // </Provider>
  );
}

export default App;
