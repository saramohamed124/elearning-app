import React from 'react'
import NavDash from './components/NavDash'
import SideBar from './components/SideBar'
import { Box } from '@mui/material'
import { Flexbox } from '../../styles/globalStyles';
import { Outlet } from 'react-router-dom';

const InstructorDashboard = () => {
  return (
    <div>
      <NavDash/>
      <Box sx={{ ...Flexbox }}>
      <SideBar/>
      <div
        className='container-custom'
        style={{
          width: '80%',
          overflowY: 'scroll',
          maxHeight: '100vh',
          padding:'20px'}}>
        <Outlet/>
      </div>
      </Box>
    </div>
  )
}

export default InstructorDashboard
