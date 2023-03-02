import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Register from "../pages/Register";
import ProfileUser from "../pages/ProfileUser";
import ProfileAdmin from "../pages/ProfileAdmin";
import ProtectedRoutes from "../components/ProtectedRoutes";
import ProtectedProfileAdmin from "../components/ProtectedProfileAdmin";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to={"/home"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/product" element={<Product />} />
        <Route path="/profileUser" element={<ProfileUser />} />
      </Route>
      <Route element={<ProtectedProfileAdmin />}>
        <Route path="/profileAdmin" element={<ProfileAdmin />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
