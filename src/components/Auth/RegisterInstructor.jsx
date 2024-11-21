import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'

// Gif
import instructor_gif from './Register/instructors/assets/instructor.gif'
import { ImgAuth } from '../../styles/globalStyles';
import FormRegisterInstructors from './Register/instructors/components/FormRegisterInstructors';
const RegisterInstructor = () => {
    const LoginPage = styled(Box)(({ theme }) => ({
        display: 'flex',
        width: '100%',
        '@media (max-width:970px)':{
            flexDirection:'column-reverse',
            height:'100%'
        }
    }));
  return (
    <LoginPage>
      <FormRegisterInstructors/>
      <img src={instructor_gif} alt='instructor' style={{...ImgAuth}}/>
    </LoginPage>
  )
}

export default RegisterInstructor
