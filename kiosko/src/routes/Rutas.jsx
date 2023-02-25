import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminPedidos from "../pages/Admin/adminpedidos/AdminPedidos";
import AdminUser from "../pages/Admin/adminuser/AdminUser";
import Home from "../pages/home/Home";
import Paymen from "../pages/paymen/Paymen";
import Perfil from "../pages/perfil/Perfil";
import AuthGuard from "./AuthGuard";

const Rutas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="*" element={<> Not Found</>} />

      <Route element={<AuthGuard />}>
        <Route exact path="/paymen" element={<Paymen />} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/adminuser" element={<AdminUser />} />
        <Route exact path="/adminpedido" element={<AdminPedidos />} />
      </Route>
    </Routes>
  );
};

export default Rutas;
