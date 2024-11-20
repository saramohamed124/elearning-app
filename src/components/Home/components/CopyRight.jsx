import { Box, Typography } from '@mui/material'
import React from 'react'

const CopyRight = () => {
  return (
    <Box sx={{backgroundColor:'var(--main-color-orange-gold)', padding:'10px 15px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Typography variant="h5" gutterBottom>جميع الحقوق محفوظة 2024 </Typography>
    </Box>
  )
}

export default CopyRight
