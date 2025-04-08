import React from 'react'
import NavDash from './components/NavDash'
import SideBar from './components/SideBar'
import { Box } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart';
import { Flexbox } from '../../styles/globalStyles';
import { Outlet } from 'react-router-dom';

const InstructorDashboard = () => {
  return (
    <div>
      <NavDash/>
      <Box sx={{ ...Flexbox }}>
      <SideBar/>
      <Box sx={{ width:'100%', padding:'20px'}}>
        <Outlet/>
      </Box>
      </Box>
    </div>
  )
}

export default InstructorDashboard
