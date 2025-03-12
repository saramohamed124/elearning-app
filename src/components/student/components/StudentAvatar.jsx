import { Avatar } from '@mui/material'
import React from 'react'

// img
import student_avatar from '../../Navbar/assets/imgs/avatar_student.png';

const StudentAvatar = () => {
  return (
    <Avatar src={student_avatar} sx={{width: 95, height: 95}}>
      
    </Avatar>
  )
}

export default StudentAvatar
