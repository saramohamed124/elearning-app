import styled from '@emotion/styled';
import { Box, FormControl,  MenuItem, OutlinedInput, Select, TextareaAutosize, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { Flexbox, FormCustomStyle, FormRegisterStyle, Gap20 } from '../../../../../styles/globalStyles';
import ButtonAuth from '../../../common/Button';
import InstructorStudentCard from '../../common/InstructorStudentCard';

const FormRegisterInstructors = () => {
    const FormCostum = styled(Box)(({ theme }) => ({
        ...FormCustomStyle
    }));
    
    const FormRegister = styled(Box)(({ theme }) => ({
        ...FormRegisterStyle
    }));
    
    const Label = styled(Typography)({
        fontWeight: "bold",
        margin: '10px 0',
    });
    
    const StyledLink = styled(Link)({
        display:'block',
        color: '#2D54E0',
    });
    
  return (
    <FormCostum sx={Flexbox}>
    <FormRegister>
        <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
            إنشاء حساب محاضر
        </Typography>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <Label>الإسم الأول</Label>
            <OutlinedInput type='text' sx={{ background: 'white' }} placeholder="الإسم الأول" />
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
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
        <Label>التخصص</Label>
        <Select
          displayEmpty
          sx={{ background: 'white' }}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>التخصص</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
        <Label>السيرة الذاتية</Label>
        <TextareaAutosize style={{background:'white', borderRadius:'5px'}} aria-label="minimum height" minRows={5} placeholder="السيرة الذاتية" />
      </FormControl>
        <Box sx={{ width: {xs:'90%',md:'70%'} }}>
            <Box sx={{...Flexbox,...Gap20}}>
                <span>لديك حساب بالفعل؟</span>
                <StyledLink to="/login">تسجيل الدخول</StyledLink>
            </Box>
        </Box>
        <ButtonAuth>إنشاء حساب</ButtonAuth>
    </FormRegister>
    <InstructorStudentCard/>
</FormCostum>
)
}

export default FormRegisterInstructors
