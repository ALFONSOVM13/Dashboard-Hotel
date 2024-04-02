import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
import RoomEdit from "./pages/RoomEdit";
import EditReservation from "./pages/Reservations/EditReservation";
import { useEffect, useRef, useState } from "react";
import EditGuest from "./pages/Guests/EditGuest";
import CreateGuest from "./pages/Guests/CreateGuest";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useLocalStorage } from "react-use";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import RoomCreate from "./pages/RoomCreate";

function App() {
  const [user, setUser] = useLocalStorage("user", {
    user: "",
    token: "",
  });
  const [logged, setLogged] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const sideBar = useRef();
  const tabcontent = useRef();

  const noSideBarRoutes = ["/", "/register"];
  const noProtectedRoutes = ["/", "/register"];

  useEffect(() => {
    if (user.user === "" && !noProtectedRoutes.includes(location.pathname)) {
      navigate("/");
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, [location.pathname, logged]);
  const handleMenu = (e) => {
    if (!e) return;
    let screenWidth = window.innerWidth;
    let sidebar = sideBar.current;
    let tabContent = tabcontent.current;

    if (screenWidth < 700) {
      sidebar?.classList?.remove("left-0");
      sidebar?.classList?.add("left-[-300px]");
      tabContent.classList?.remove("pl-[300px]");
      tabContent.classList?.add("pl-0");
    } else {
      sidebar?.classList.remove("left-[-300px]");
      sidebar?.classList.add("left-0");

      tabContent?.classList.remove("pl-0");
      tabContent?.classList?.add("pl-[300px]");
    }
  };

  window.addEventListener("resize", handleMenu);
  return (
    // <Provider store={store}>
    <div className="flex">
      {!noSideBarRoutes.includes(location.pathname) && (
        <Sidebar controlador={sideBar} setSession={setLogged} />
      )}
      <div
        ref={tabcontent}
        className={`flex justify-start min-h-screen flex-col w-full ${
          !noSideBarRoutes.includes(location.pathname) && " pl-[300px]"
        } transition-all duration-500 ease-in-out`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage user={user} setUser={setUser} setSession={setLogged} />
            }
          />
          <Route path="register" element={<RegisterPage />} />
          <Route
            element={<ProtectedRoute canActivate={logged} redirectPath="/" />}
          >
            <Route path="dashboard">
              <Route path="" element={<Dashboard />} />
              <Route path="guests" element={<Guests />}>
                <Route path="createguest/newguest" element={<CreateGuest />} />
              </Route>
              <Route path="reservations" element={<Reservations />} />
              <Route
                path="reservations/:reservationId"
                element={<EditReservation />}
              />
              <Route path="guests/:id" element={<EditGuest />} />
              <Route path="offers" element={<Offers />} />
              <Route path="employees" element={<Employees />} />
              <Route path="roomsCustomization">
                <Route path="" element={<RoomsCustomization />} />
                <Route path=":roomId" element={<RoomEdit />} />
                <Route path="create" element={<RoomCreate />} />
              </Route>
              <Route
                path="offerNotifications"
                element={<OfferNotifications />}
              />
              <Route path="notifications" element={<Notifications />} />
              <Route path="restaurantMenu" element={<RestaurantMenu />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
    // </Provider>
  );
}

export default App;
