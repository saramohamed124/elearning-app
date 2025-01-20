import styled from '@emotion/styled';
import { FormControl, FormLabel, OutlinedInput } from '@mui/material';
import React from 'react'
import ErrorInputs from './ErrorInputs';

const TextInput = React.memo(({id, label, type, value, color, onChange, focus, setFocus, isValid, isFocus, errorMsg}) => {
    const FormLabelCustom = styled(FormLabel)({
        fontWeight: "bold",
        margin: '10px 0',
        color:color
    });
    

    return (
    <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
        <FormLabelCustom htmlFor ={id}>{label}</FormLabelCustom>
    <OutlinedInput
        type={type}
        autoComplete='off'
        id={id}
        sx={{ background: 'white' }}
        placeholder={label}
        value={value}
        onChange={onChange}
        onFocus={focus}
        onBlur={setFocus}
        required
        />
        <ErrorInputs errorMsg={errorMsg} visible={value && isFocus && !isValid} />
    </FormControl>
  )
})

export default TextInput
