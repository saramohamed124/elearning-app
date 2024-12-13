import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const ErrorInputs = React.memo(({errorMsg, visible}) => {
    const ErrorStyledCustom = styled(Typography)({
        display:'block',
        color:'var(--main-color-error)',
        padding:'5px',
        borderRadius:'7px',
        fontWeight: "bold"
    })
    if(!visible) return null;
  return (
    <ErrorStyledCustom>{errorMsg}</ErrorStyledCustom>
  )
})

export default ErrorInputs
