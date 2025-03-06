import React from 'react'
import { Outlet } from 'react-router-dom'
import PageNotFound from '../utils/Error/PageNotFound'
import { getToken } from '../services/authServices'

const ProtectedRoutes = ({allowedRoles}) => {
    const { role } = getToken()
  return (
    allowedRoles.includes(role) ? 
    <Outlet/> :
    <PageNotFound/>
  )
}

export default ProtectedRoutes
