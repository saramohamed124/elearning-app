// Login.jsx
import React from 'react';
import login from './login/assets/login.gif';
import FormLogin from './login/components/FormLogin';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { ImgAuth } from '../../styles/globalStyles';

const LoginPage = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    height:'100vh',
    '@media (max-width:970px)':{
        flexDirection:'column-reverse',
        height:'100%'
    }
}));

const Login = () => {
    return (
        <LoginPage>
            <FormLogin />
            <img style={{...ImgAuth}} src={login} alt='login' />
        </LoginPage>
    );
};

export default Login;
