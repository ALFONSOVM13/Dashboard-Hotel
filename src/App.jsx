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

function App() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const { VITE_SOCKET_URL } = import.meta.env;
    const newSocket = io(VITE_SOCKET_URL);
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const [logged, setLogged] = useState(true);
  const location = useLocation();
  const sideBar = useRef();
  const tabcontent = useRef();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebar, setSidebar] = useState();
  let sidebarElement = document.getElementById("sidebar");

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
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
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
    let sidebar = sideBar.current;
    let tabContent = tabcontent.current;

    if (screenWidth < 768) {
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

  useEffect(() => {
    setSidebar(!!document.getElementById("sidebar"));
  }, [document.getElementById("sidebar")]);

  window.addEventListener("resize", handleMenu);
  return (
    // <Provider store={store}>
    <div
      className={`flex dark:bg-[rgba(10,10,10,0.9)] transition-all duration-300 max-w-screen overflow-x-hidden`}
    >
      {!noSideBarRoutes.includes(location.pathname) && (
        <ProtectedRoute showLoading={false}>
          <Sidebar
            controlador={sideBar}
            darkMode={darkMode}
            toogleDarkMode={toogleDarkMode}
          />
        </ProtectedRoute>
      )}

      <div
        ref={tabcontent}
        className={`dark:bg-black-900 flex justify-start min-h-screen flex-col overflow-x-hidden w-full ${
          noSideBarRoutes.includes(location.pathname) ? " pl-0" : " pl-[300px]"
        } transition-all duration-300 ease-in-out`}
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
