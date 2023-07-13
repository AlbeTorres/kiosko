import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PedidoDetails from "../components/pedidos/PedidoDetails";
import AdminPedidos from "../pages/Admin/adminpedidos/AdminPedidos";
import AdminUser from "../pages/Admin/adminuser/AdminUser";
import Home from "../pages/home/Home";
import Paymen from "../pages/paymen/Paymen";
import Perfil from "../pages/perfil/Perfil";
import AuthGuard from "./AuthGuard";
import AuthenticateAccount from "../pages/auth/AuthenticateAccount";
import { Login } from "../pages/auth/Login.page";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/:verificado" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/verify-email:emailToken"
        element={<AuthenticateAccount />}
      />

      <Route path="*" element={<> Not Found</>} />

      <Route element={<AuthGuard />}>
        <Route path="/paymen" element={<Paymen />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/adminuser" element={<AdminUser />} />
        <Route path="/adminpedido" element={<AdminPedidos />} />
        <Route path="/pedido:id" element={<PedidoDetails />} />
      </Route>
    </Routes>
  );
};

export default Rutas;
