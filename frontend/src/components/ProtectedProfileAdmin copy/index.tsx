import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedProfileAdmin = () => {
  const location = useLocation();

  const token = localStorage.getItem("@user:token");

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
};

export default ProtectedProfileAdmin;
