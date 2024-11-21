import { Box, Typography } from '@mui/material'
import React from 'react'
import { FlexboxCenter, Gap20 } from '../../../../styles/globalStyles'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

// Icons
import instructor_icon from '../assets/instructor.svg'
import student_icon from '../../../../assets/icons/students.svg'

const InstructorStudentCard = () => {
    const CardAuth = styled(Link)(({theme})=>({
        ...FlexboxCenter,
        ...Gap20,
        flexDirection:'column',
        backgroundColor:'var(--main-color-golden-yellow)',
        width:'20%',
        padding:'1rem 2rem',
        borderRadius:'12px',
        textDecoration:'none',
        '&:hover':{
            background:'var(--main-color-orange-gold)'
        },
        '& > img':{
            width:'40px'
        },
        '& > p':{
            fontWeight:'bold',
            fontSize:'20px'
        }
    }))
  return (
    <Box sx={{...FlexboxCenter,...Gap20,margin:'10px auto',width:'100%'}}>
        <CardAuth style={{ color:'black'}} to={'/register-instructor'}>
            <img src={instructor_icon} alt='instructor'/>
            <Typography >محاضر</Typography>
        </CardAuth>
        <CardAuth style={{ color:'black'}} to={'/register-student'}>
            <img src={student_icon} alt='student'/>
            <Typography>طالب</Typography>
            </CardAuth>
    </Box>
  )
}

export default InstructorStudentCard
