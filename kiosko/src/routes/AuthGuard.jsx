import React,{ useContext, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import authContext from '../context/authContext/authContext';

const AuthGuard = () => {
    const AuxAuthContext= useContext(authContext);
    const {autenticado, usuarioAutenticado}= AuxAuthContext;

    useEffect(()=>{
        usuarioAutenticado()
        
        
       },[ ]);

  return  autenticado ? <Outlet/> : <Navigate replace to={'/'}/>
}

export default AuthGuard