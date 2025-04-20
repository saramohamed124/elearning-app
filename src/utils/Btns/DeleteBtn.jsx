import { useTheme } from '@emotion/react'
import { Button, styled } from '@mui/material'
import React from 'react'

const DeleteBtn = ({handleDelete}) => {
    const theme = useTheme();
    const ButtonCustom = styled(Button)({
        position:'absolute',
        top:'-18px',
        left:'-18px',
        minWidth:'fit-content',
        backgroundColor: theme.palette.mainColorError,
        color:'white',
        padding: '5px 12px !important',
        fontSize:'14px',
        borderRadius:'50%'
    })
  return (
    <ButtonCustom onClick={handleDelete}>
      X
    </ButtonCustom>
  )
}

export default DeleteBtn
