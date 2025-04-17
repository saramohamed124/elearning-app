import React from 'react'
import NavDash from './components/NavDash'
import SideBar from './components/SideBar'
import { Box } from '@mui/material'
import { Flexbox } from '../../styles/globalStyles';
import { Outlet, useLocation } from 'react-router-dom';

const InstructorDashboard = () => {
  const location = useLocation()
  const profile = location.pathname.includes('/instructor-dashboard/profile');
  return (
    <div>
      <NavDash/>
      <Box sx={{ ...Flexbox }}>
      <SideBar/>
      <div
        className={!profile ? 'container-custom' : ''}
        style={{
          width: '100%',
          overflowY: 'scroll',
          maxHeight: '100vh',
          padding: !profile ? '20px' : '0px'}}>
        <Outlet/>
      </div>
      </Box>
    </div>
  )
}

export default InstructorDashboard
