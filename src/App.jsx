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
  const [darkMode, setDarkMode] = useState(false);

  const toogleDarkMode = () => {
    if (!darkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
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
    if (!e || noSideBarRoutes.includes(location.pathname)) return;
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
    <div
      className={`flex dark:bg-[rgba(10,10,10,0.9)] dark:text-white transition-all duration-300`}
    >
      {!noSideBarRoutes.includes(location.pathname) && (
        <Sidebar
          controlador={sideBar}
          setSession={setLogged}
          darkMode={darkMode}
          toogleDarkMode={toogleDarkMode}
        />
      )}

      <div
        ref={tabcontent}
        className={`dark:bg-black-900 flex justify-start min-h-screen flex-col w-full ${
          !noSideBarRoutes.includes(location.pathname) ? " pl-[300px]" : "pl-0"
        } transition-all duration-300 ease-in-out`}
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
             <Route path="guests" element={<Guests />} />
            <Route
              path="guests/createguest/newguest"
              element={<CreateGuest />}
            />
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
