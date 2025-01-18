import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { VerfiedEmailText } from '../../../../../styles/globalStyles'
import { VerfiedEmailBtn } from '../../../../../styles/globalStyles'
import { FlexboxCenter,FlexBoxCol } from '../../../../../styles/globalStyles'
const ContentVerfied = () => {

  return (
    <Box sx={{ ...FlexboxCenter,...FlexBoxCol,width:'100%', gap:'20px' }}>
      <Typography sx={{ ...VerfiedEmailText }}>تم إرسال بريد الكتروني لتفعيل حسابك</Typography>
      <Link to={'/login'} style={{ ...VerfiedEmailBtn}}>
        تسجيل الدخول
      </Link>
      <Box sx={{ ...FlexboxCenter,width:'100%', gap:'20px' }}>
        <Typography sx={{fontWeight:'bold'}}>لم تستلم البريد الإلكتروني؟</Typography>
        <Link to={'/resend-email'}>أعد إرساله</Link>
      </Box>
    </Box>
  )
}

export default ContentVerfied
