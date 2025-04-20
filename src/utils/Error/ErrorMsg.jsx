import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

const ErrorMsg = ({err}) => {
    const theme = useTheme()
  return (
        <Typography color={theme.palette.mainColorError}>{err}</Typography>
  )
}

export default ErrorMsg
