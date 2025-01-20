import { Box, styled } from '@mui/material'
import React from 'react'
import LogoResend from './Email/components/resend_email/LogoResend';
import ContentResend from './Email/components/resend_email/ContentResend';

const ResendVerfiedEmail = () => {
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
        <LogoResend />
        <ContentResend/>
      </VerfiedEmail>
    </Box>
  )
}

export default ResendVerfiedEmail
