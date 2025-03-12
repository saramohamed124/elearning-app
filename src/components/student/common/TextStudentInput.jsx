import { FormControl, FormLabel, OutlinedInput, styled } from '@mui/material'
import React from 'react'

const TextStudentInput = ({type, id, label, onChange, value, errorMsg, enabled}) => {
        const FormLabelCustom = styled(FormLabel)({
            fontWeight: "bold",
            margin: '10px 0',
            color: 'black'
        });
    
  return (
    <FormControl sx={{ width: {xs:'100%',md:'70%'} }}>
        <FormLabelCustom htmlFor ={id}>{label}</FormLabelCustom>
    <OutlinedInput
        type={type}
        autoComplete='off'
        disabled={!enabled}
        sx={{ background: 'white' , height:'50px'}}
        placeholder={value}
        value={value}
        onChange={onChange}
        required
        />
    </FormControl>
  )
}

export default TextStudentInput
