import React from "react";
import {Routes, Route, Navigate}from 'react-router-dom'
import AdminPedidos from "../pages/Admin/adminpedidos/AdminPedidos";
import AdminUser from "../pages/Admin/adminuser/AdminUser";
import Home from "../pages/home/Home";
import Paymen from "../pages/paymen/Paymen";
import Perfil from "../pages/perfil/Perfil";


const Rutas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/paymen" element={<Paymen />} />
      <Route exact path="/perfil" element={<Perfil/>} />
      <Route exact path="/adminuser" element={<AdminUser/>} />
      <Route exact path="/adminpedido" element={<AdminPedidos/>} />
      {/* <Route exact path="/productos:categoria" element={<CategoryPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registro" element={<NuevaCuenta />} />
      <Route exact path="*" element={<> Not Found</>} />

      <Route element={<AuthGuard />}>
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/add" element={<AñadirProducto />} />
        <Route exact path="/usuarioform" element={<ModificarUsuario />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
      </Route> */}
    </Routes>
  );
};

export default Rutas;
