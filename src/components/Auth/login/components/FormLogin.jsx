// FormLogin.jsx
import styled from '@emotion/styled';
import { Box, FormControl, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import ButtonAuth from '../../common/Button';
import { Link } from 'react-router-dom';
import { Flexbox, FlexboxEnd } from '../../../../styles/globalStyles';

const FormCostum = styled(Box)(({ theme }) => ({
    backgroundColor: 'var(--main-dark-midnight-blue)',
    color: 'white',
    padding: '0 40px',
    flexDirection: 'column',
    flex: '1',
}));

const FormLoginCostum = styled(Box)(({ theme }) => ({
    backgroundColor: 'var(--main-dark-midnight-blue)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flex: '1',
}));

const Label = styled(Typography)({
    fontWeight: "bold",
    margin: '10px 0',
});

const StyledLink = styled(Link)({
    color: '#2D54E0',
});

const FormLogin = () => {
    return (
        <FormCostum sx={Flexbox}>
            <FormLoginCostum>
                <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
                    تسجيل الدخول
                </Typography>
                <FormControl sx={{ width: '70%' }}>
                    <Label>الايميل</Label>
                    <OutlinedInput type='email' sx={{ background: 'white' }} placeholder="الايميل" />
                </FormControl>
                <FormControl sx={{ width: '70%' }}>
                    <Label>كلمة المرور</Label>
                    <OutlinedInput type='password' sx={{ background: 'white' }} placeholder="كلمة المرور" />
                </FormControl>
                <Box sx={{ width: "70%" }}>
                    <StyledLink to="/forgot-password">نسيت كلمة السر؟</StyledLink>
                    <Box sx={FlexboxEnd}>
                        <span>ليس لديك حساب؟</span>
                        <StyledLink to="/register">إنشاء حساب</StyledLink>
                    </Box>
                </Box>
                <ButtonAuth>تسجيل الدخول</ButtonAuth>
            </FormLoginCostum>
        </FormCostum>
    );
};

export default FormLogin;