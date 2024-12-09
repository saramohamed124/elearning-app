// FormLogin.jsx
import styled from '@emotion/styled';
import { Box, FormControl, OutlinedInput, Typography } from '@mui/material';
import React, { useState } from 'react';
import ButtonAuth from '../../common/Button';
import { Link } from 'react-router-dom';
import { Flexbox, FlexboxEnd, Gap20 } from '../../../../styles/globalStyles';

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
    display:'block',
    color: '#2D54E0',
});


const FormLogin = () => {
    
    // State
        const [email, setEmail] = useState('');
    
    return (
        <FormCostum sx={Flexbox}>
            <FormLoginCostum>
                <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
                    تسجيل الدخول
                </Typography>
                <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
                    <Label>الايميل</Label>
                    <OutlinedInput
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ background: 'white' }}
                    placeholder="الايميل" />
                </FormControl>
                <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
                    <Label>كلمة المرور</Label>
                    <OutlinedInput type='password' sx={{ background: 'white' }} placeholder="كلمة المرور" />
                </FormControl>
                <Box sx={{ width: {xs:'90%',md:'70%'} }}>
                    <StyledLink to="/forgot-password" style={{margin:'10px 0'}}>نسيت كلمة السر؟</StyledLink>
                    <Box sx={{...FlexboxEnd,...Gap20}}>
                        <span>ليس لديك حساب؟</span>
                        <StyledLink to="/register-instructor">إنشاء حساب</StyledLink>
                    </Box>
                </Box>
                <ButtonAuth>تسجيل الدخول</ButtonAuth>
            </FormLoginCostum>
        </FormCostum>
    );
};

export default FormLogin;