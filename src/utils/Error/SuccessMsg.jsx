import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

const SuccessMsg = ({msg}) => {
    const theme = useTheme()
  return (
        <Typography color={theme.palette.mainColorSuccess}>{msg}</Typography>
  )
}

export default SuccessMsg
