import { Box, Typography } from '@mui/material'
import React from 'react'
import {FlexboxCenter} from '../../styles/globalStyles'
import error_notfound from '../../assets/error404.gif'
const PageNotFound = () => {
  return (
    <Box sx={{...FlexboxCenter,flexDirection:'column', gap:'10px', margin:'20px auto'}}>
      <Typography sx={{color:'var(--main-color-orange-gold)',fontSize:'33px'}}>هذه الصفحة غير موجودة</Typography>
      <img src={error_notfound} alt='not found'/>
    </Box>
  )
}

export default PageNotFound
