import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'
import FormRegisterStudents from './Register/students/components/FormRegisterStudents';

// Gif
import student_gif from './Register/students/assets/student.gif'
import { ImgAuth } from '../../styles/globalStyles';
const RegisterStudent = () => {
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
      <FormRegisterStudents/>
      <img src={student_gif} alt='student' style={{...ImgAuth}}/>
    </LoginPage>
  )
}

export default RegisterStudent
