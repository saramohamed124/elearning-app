import { Box, Typography } from '@mui/material'
import React from 'react'

const CopyRight = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box sx={{backgroundColor:'var(--main-color-orange-gold)', padding:'10px 15px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Typography variant="h5" gutterBottom>جميع الحقوق محفوظة {currentYear} </Typography>
    </Box>
  )
}

export default CopyRight
