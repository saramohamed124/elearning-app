import React from 'react';
import LogoEmail from './Email/components/email_verfied/LogoEmail';
import ContentVerfied from './Email/components/email_verfied/ContentVerfied';
import { Box, styled } from '@mui/material';

const VerfiedEmail = () => {
  const VerfiedEmail = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:'90vh',
    padding:'20px',
  }));

  return (
    <Box>
      <VerfiedEmail>
        <LogoEmail />
        <ContentVerfied/>
      </VerfiedEmail>
      <p style={{textAlign:'center',margin:'10px 0'}}>إذا لم تتلق البريد الإلكتروني خلال بضع دقائق، تحقق من مجلد البريد غير الهام أو أعد الإرسال</p>
    </Box>
  )
}

export default VerfiedEmail
