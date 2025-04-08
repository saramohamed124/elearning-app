import { Box, Typography } from '@mui/material'
import React from 'react'
import { getToken } from '../../../../services/authServices'
import Instructors from './Instructors'
import ShowMore from '../../../../utils/Btns/ShowMore'
const InstructorExplore = () => {
  const { accessToken } = getToken(); // Check if the user is logged in
  // Check if the access token is present
    if(!accessToken) {
      return (
        <Box sx={{ textAlign: 'center', padding: '20px' }}>
          <Typography variant="h6" color="textSecondary">
          أنت بحاجة لتسجيل الدخول لرؤية المدربين.
          </Typography>
        </Box>
      )
    }
    return(
      <Box>
        <Instructors/>
      <ShowMore/>
      </Box>
    )
}
export default InstructorExplore