import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import authContext from "../context/authContext/authContext";
import { useProfile } from "../hooks/profile.hook";

const AuthGuard = () => {
  const AuxAuthContext = useContext(authContext);
  const { autenticado, usuarioAutenticado } = AuxAuthContext;

  const { data: profile, isSuccess } = useProfile();

  console.log(profile)

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return autenticado ? <Outlet /> : <Navigate replace to={"/"} />;
};

export default AuthGuard;
