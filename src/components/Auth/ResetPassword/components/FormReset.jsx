import React, { useCallback, useState } from 'react'
import { FormCustomStyle, FormRegisterStyle } from '../../../../styles/globalStyles'
import { Box, FormControl, FormGroup, OutlinedInput, Typography } from '@mui/material'
import styled from '@emotion/styled';
import ButtonAuth from '../../common/Button';
import { api } from '../../../../api/api';
import { FORGET_PWD } from '../../../../api/endpoints';
import TextInput from '../../common/TextInput';
import { MAIL_REGEX } from '../../constants/regex';
import ErrorInputs from '../../common/ErrorInputs';
import toast from 'react-hot-toast';
import { ToastWrapper } from '../../utils/ToasterWrapper';
import { SuccessMsgToast } from '../../utils/toasts';

const FormReset = () => {
    const [email, setEmail] = useState();
    const [error, setError] = useState(false);
    const handleForgetPWD = useCallback( async(e) => {
        e.preventDefault();
        if(!MAIL_REGEX.test(email)){
            setError(true);
        }
        try{
            await api.post(FORGET_PWD,
                {
                    email
                }
            );
            SuccessMsgToast('تم إرسال الرابط بنجاح. تفقد بريدك الالكتروني.')
        }catch(err){
            console.log(err);
        }
    },[email])
  return (
    <Box sx={FormCustomStyle}>
        <Box component={'form'} sx={FormRegisterStyle} onSubmit={handleForgetPWD}>
            <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
                إعادة تعيين كلمة المرور
            </Typography>
            <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
                <TextInput color = "white"
                id={'email'}
                value={email}
                onChange={(e) => setEmail( e.target.value)}
                type={'email'}
                label={'الايميل'}
                errorMsg={'يرجى إدخال ايميل صالح'}
                />
                {error && <ErrorInputs errorMsg={'يرجى إدخال ايميل صالح'} visible ={true}
                />}
                </FormControl>
            <Typography>سوف يتم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.</Typography>
            <ButtonAuth>تعيين كلمة المرور</ButtonAuth>
            <ToastWrapper/>
        </Box>
    </Box>
  )
}

export default FormReset
