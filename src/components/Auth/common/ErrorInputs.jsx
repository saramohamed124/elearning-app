import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const ErrorInputs = ({errorMsg, visible}) => {
    const ErrorStyledCustom = styled(Typography)({
        display:'block',
        color:'white',
        background:'rgb(255, 0, 0 , 0.5)',
        padding:'10px 15px',
        margin:'10px',
        borderRadius:'7px'
    })
    if(!visible) return null;
  return (
    <ErrorStyledCustom>{errorMsg}</ErrorStyledCustom>
  )
}

export default ErrorInputs
