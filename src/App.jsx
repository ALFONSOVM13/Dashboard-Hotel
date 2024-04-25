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
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import RoomCreate from "./pages/RoomCreate";
import CreateReservation from "./pages/Reservations/CreateReservation";
import Services from "./pages/Services";
import CarEdit from "./pages/ServiceManage/ServiceEdit/CarEdit";
import SpaEdit from "./pages/ServiceManage/ServiceEdit/SpaEdit";
import CarCreate from "./pages/ServiceManage/ServiceCreate/CarCreate";
import CreateEmployee from "./pages/Employees/CreateEmployee";
import EditEmployee from "./pages/Employees/EditEmployee";
import SpaCreate from "./pages/ServiceManage/ServiceCreate/SpaCreate";
import { io } from "socket.io-client";
import ChatAdmin from "./components/ChatAdmin";
import BookNotify from "./components/BookNotify";
import BurguerButton from "./components/BurguerButton";

function App() {
  const [socket, setSocket] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showBurguer, setShowBurguer] = useState(false);
  useEffect(() => {
    const { VITE_BACKEND_URL } = import.meta.env;
    const newSocket = io(VITE_BACKEND_URL);
    setSocket(newSocket);
    if (window.innerWidth >= 768) {
      setShowMenu(true);
    }
    return () => newSocket.close();
  }, []);

  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toogleDarkMode = () => {
    if (darkMode) {
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
      document.documentElement?.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement?.classList.remove("dark");
      setDarkMode(false);
    }

    let screenWidth = window.innerWidth;
    console.log("es menor a 768", screenWidth < 768, screenWidth);
    setShowMenu(screenWidth >= 768, screenWidth < 768);
    setShowBurguer(screenWidth < 768);
  }, []);

  const noSideBarRoutes = ["/", "/register"];
  // const noProtectedRoutes = ["/", "/register"];

  // useEffect(() => {
  //   if (user.user === "" && !noProtectedRoutes.includes(location.pathname)) {
  //     navigate("/");
  //     setLogged(false);
  //   } else {
  //     setLogged(true);
  //   }
  // }, [location.pathname, logged]);
  const handleMenu = (e) => {
    if (!e || !document.getElementById("sidebar")) return;
    let screenWidth = window.innerWidth;

    setShowMenu(screenWidth >= 768);
    setShowBurguer(screenWidth < 768);
  };

  const handleShowMenu = (e) => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setShowMenu(false);
      setShowBurguer(true);
    }
  }, [location.pathname]);

  window.addEventListener("resize", handleMenu);

  return (
    // <Provider store={store}>
    <div
      className={`flex dark:bg-[rgba(10,10,10,0.9)] transition-all duration-300 max-w-screen overflow-x-hidden`}
    >
      {!noSideBarRoutes.includes(location.pathname) && showBurguer && (
        <BurguerButton value={showMenu} handler={handleShowMenu} />
      )}
      {!noSideBarRoutes.includes(location.pathname) && (
        <ProtectedRoute showLoading={false}>
          <Sidebar
            className={`${
              !showBurguer
                ? showMenu
                  ? "left-0"
                  : "left-[-300px]"
                : showMenu && showBurguer
                ? "-translate-x-0"
                : "-translate-x-[100%]"
            } 
              
             ${showBurguer ? "w-full" : " w-[300px]"}`}
            darkMode={darkMode}
            toogleDarkMode={toogleDarkMode}
          />
        </ProtectedRoute>
      )}

      <div
        className={`${
          !noSideBarRoutes.includes(location.pathname) &&
          showMenu &&
          !showBurguer
            ? "pl-[300px]"
            : "pl-0"
        } dark:bg-black-900 flex justify-start min-h-screen flex-col overflow-x-hidden w-full  pl-0 transition-all duration-300 ease-in-out z-[200]`}
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* <Route
            element={<ProtectedRoute canActivate={logged} redirectPath="/" />}
          > */}

          <Route path="dashboard">
            <Route
              path=""
              element={
                <ProtectedRoute>
                  <></>
                </ProtectedRoute>
              }
            />
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="guests"
              element={
                <ProtectedRoute>
                  <Guests />
                </ProtectedRoute>
              }
            />
            <Route
              path="guests/new/register"
              element={
                <ProtectedRoute>
                  <CreateGuest />
                </ProtectedRoute>
              }
            />
            <Route path="reservations">
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <Reservations />
                  </ProtectedRoute>
                }
              />
              <Route path=":id" element={<EditReservation />} />
              <Route path="create" element={<CreateReservation />} />
            </Route>
            <Route path="guests/:id" element={<EditGuest />} />
            <Route
              path="offers"
              element={
                <ProtectedRoute>
                  <Offers />
                </ProtectedRoute>
              }
            />
            <Route path="employees">
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <Employees />
                  </ProtectedRoute>
                }
              />{" "}
              <Route
                path="create"
                element={
                  <ProtectedRoute>
                    <CreateEmployee />
                  </ProtectedRoute>
                }
              />
              <Route
                path="edit/:id"
                element={
                  <ProtectedRoute>
                    <EditEmployee />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="roomsCustomization">
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <RoomsCustomization />
                  </ProtectedRoute>
                }
              />
              <Route path=":roomId" element={<RoomEdit />} />
              <Route path="create" element={<RoomCreate />} />
            </Route>
            <Route path="services">
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <Services />
                  </ProtectedRoute>
                }
              />
              <Route path="car/:id" element={<CarEdit />} />
              <Route path="spa/:id" element={<SpaEdit />} />
              <Route path="newCar" element={<CarCreate />} />
              <Route path="newSpa" element={<SpaCreate />} />
            </Route>
            {/* <Route
              path="offerNotifications"
              element={
                <ProtectedRoute>
                  <BookNotify socket={socket} />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="notifications"
              element={
                <ProtectedRoute>
                  <ChatAdmin socket={socket} />
                </ProtectedRoute>
              }
            />
            <Route
              path="restaurantMenu"
              element={
                <ProtectedRoute>
                  <RestaurantMenu />
                </ProtectedRoute>
              }
            />

            {/* </Route> */}
          </Route>
        </Routes>
      </div>
    </div>
    // </Provider>
  );
}

export default App;
