import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ canActivate, redirectPath = "/" }) {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  } else return <Outlet />;
}

export default ProtectedRoute;
