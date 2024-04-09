import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogged } from "../services/AuthService";
import Loading from "../components/Loading";

function ProtectedRoute({ children, showLoading = true }) {
  //check expiry and verify  jwt token here. If valid redirect to outlet otherwise navigate to login page
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    isLogged()
      .then((response) => setIsAuthenticated(response))
      .catch(() => setIsAuthenticated(false));
  }, []);

  switch (isAuthenticated) {
    case true:
      return children;
    case false:
      return <Navigate replace to="/" />;
    case null:
      return showLoading ? <Loading state={true} fullscreen={true} /> : null;
  }
}

export default ProtectedRoute;
