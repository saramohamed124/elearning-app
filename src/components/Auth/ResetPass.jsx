import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'

// Gif
import reset_pass from './ResetPassword/assets/reset_password.gif'
import { ImgAuth } from '../../styles/globalStyles';
import FormReset from './ResetPassword/components/FormReset';
const ResetPass = () => {
    const LoginPage = styled(Box)(({ theme }) => ({
        display: 'flex',
        width: '100%',
        '@media (max-width:970px)':{
            flexDirection:'column-reverse',
            height:'100%'
        }
    }));
  return (
    <LoginPage sx={{height:'100vh'}}>
      <FormReset/>
      <img src={reset_pass} alt='reset' style={{...ImgAuth}}/>
    </LoginPage>
  )
}

export default ResetPass
