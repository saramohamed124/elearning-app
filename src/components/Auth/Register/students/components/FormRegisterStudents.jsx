import styled from '@emotion/styled';
import { Box, FormControl, OutlinedInput, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Flexbox, FormCustomStyle, FormRegisterStyle, Gap20 } from '../../../../../styles/globalStyles';
import ButtonAuth from '../../../common/Button';
import InstructorStudentCard from '../../common/InstructorStudentCard';

const FormRegisterStudents = () => {

    const Label = styled(Typography)({
        fontWeight: "bold",
        margin: '10px 0',
    });
    
    const StyledLink = styled(Link)({
        display:'block',
        color: '#2D54E0',
    });
    
    // State
    const [firstName, setFirstName] = useState('');
  return (
    <Box sx={{...Flexbox,...FormCustomStyle}}>
    <Box sx={{...FormRegisterStyle}}>
        <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
            إنشاء حساب طالب
        </Typography>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <Label>الإسم الأول</Label>
            <OutlinedInput type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ background: 'white' }} placeholder="الإسم الأول" />
        </FormControl>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <Label>الإسم الأخير</Label>
            <OutlinedInput type='text' sx={{ background: 'white' }} placeholder="الإسم الأخير" />
        </FormControl>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <Label>الايميل</Label>
            <OutlinedInput type='email' sx={{ background: 'white' }} placeholder="الايميل" />
        </FormControl>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <Label>كلمة المرور</Label>
            <OutlinedInput type='password' sx={{ background: 'white' }} placeholder="كلمة المرور" />
        </FormControl>
        <Box sx={{ width: {xs:'90%',md:'70%'} }}>
            <Box sx={{...Flexbox,...Gap20}}>
                <span>لديك حساب بالفعل؟</span>
                <StyledLink to="/login">تسجيل الدخول</StyledLink>
            </Box>
        </Box>
        <ButtonAuth>إنشاء حساب</ButtonAuth>
    </Box>
    <InstructorStudentCard/>
</Box>
)
}

export default FormRegisterStudents
