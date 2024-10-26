import { Box, Typography } from '@mui/material'
import React from 'react'
import { ErrorPage, ErrorPageHeading } from '../../styles/theme'

// Gif
import error_notfound from '../../assets/error404.gif'

const PageNotFound = () => {
  return (
    <Box sx={ErrorPage}>
      <Typography sx={ErrorPageHeading}>هذه الصفحة غير موجودة</Typography>
      <img style={{maxWidth:'100%'}} src={error_notfound} alt='not found'/>
    </Box>
  )
}

export default PageNotFound
