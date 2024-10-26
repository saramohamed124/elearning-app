// Login.jsx
import React from 'react';
import login from './login/assets/login.gif';
import FormLogin from './login/components/FormLogin';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

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
            <img style={{ maxWidth: '100%', flex: '1' ,maxHeight:'600px'}} src={login} alt='login' />
        </LoginPage>
    );
};

export default Login;
