import React from 'react'
import { FormCustomStyle, FormRegisterStyle } from '../../../../styles/globalStyles'
import { Box, FormControl, FormGroup, OutlinedInput, Typography } from '@mui/material'
import styled from '@emotion/styled';
import ButtonAuth from '../../common/Button';

const FormReset = () => {
    const Label = styled(Typography)({
        fontWeight: "bold",
        margin: '10px 0',
    });
  return (
    <Box sx={FormCustomStyle}>
        <FormGroup sx={FormRegisterStyle}>
            <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
                إعادة تعيين كلمة المرور
            </Typography>
            <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
                <Label> الإيميل</Label>
                <OutlinedInput type='text' sx={{ background: 'white' }} placeholder="الإيميل" />
            </FormControl>
            <Typography>سوف يتم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.</Typography>
            <ButtonAuth>تعيين كلمة المرور</ButtonAuth>
        </FormGroup>
    </Box>
  )
}

export default FormReset
