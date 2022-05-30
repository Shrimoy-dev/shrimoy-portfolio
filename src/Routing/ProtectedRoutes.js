import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
    const isAuth = window.sessionStorage.getItem('TokenValue')
  return (
   isAuth ? <Outlet/> : <Navigate to = '/login'></Navigate>
  )
}
