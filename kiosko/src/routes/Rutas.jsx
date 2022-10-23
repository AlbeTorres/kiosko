import React from "react";
import {Routes, Route, Navigate}from 'react-router-dom'
import Home from "../components/pages/home/Home";
import Paymen from "../components/pages/Paymen/Paymen";
import Perfil from "../components/pages/perfil/Perfil";

const Rutas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/paymen" element={<Paymen />} />
      <Route exact path="/perfil" element={<Perfil/>} />
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
