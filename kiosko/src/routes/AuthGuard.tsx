import React, { useContext, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import authContext from '../context/authContext/authContext'
import { useProfile } from '../hooks/api/profile.hook'

const AuthGuard = () => {
  return true ? <Outlet /> : <Navigate replace to={'/'} />
}

export default AuthGuard
