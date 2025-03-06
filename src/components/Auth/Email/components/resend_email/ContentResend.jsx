import { Box, Button, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'

// Styles
import { VerfiedEmailText } from '../../../../../styles/globalStyles'
import { VerfiedEmailBtn } from '../../../../../styles/globalStyles'
import { FlexboxCenter,FlexBoxCol } from '../../../../../styles/globalStyles'
import TextInput from '../../../common/TextInput'
import { api } from '../../../../../api/api'
import { RESEND_EMAIL } from '../../../../../api/endpoints'
import { ToastWrapper } from '../../../utils/ToasterWrapper'
import { SuccessMsgToast } from '../../../utils/toasts'

const ContentResend = () => {
    const [email, setEmail] = useState();

    const handleResendEmailVerfication = useCallback(async(e) => {
        e.preventDefault()
        try{
            await api.post(RESEND_EMAIL,
                {email}
            );
            SuccessMsgToast('تم إرسال ايميل التفعيل بنجاح. تحقق من بريدك الالكتروني.')
        }catch(err){

        }
    }, [email])
return (
    <Box
        sx={{
            ...FlexboxCenter,
            ...FlexBoxCol,
            width: '100%',
            gap: '20px',
            '@media (max-width: 600px)': {
                justifyContent: 'center',
                alignItems: 'center',
            },
        }}
    >
        <Typography sx={{ ...VerfiedEmailText }}>إعادة إرسال ايميل التفعيل</Typography>
        <Box component={'form'} onSubmit={handleResendEmailVerfication}
            sx={{
                ...FlexboxCenter,
                ...FlexBoxCol,
                width: '50%',
                gap: '20px',
                '@media (max-width: 600px)': {
                    width: '100%',
                },
            }}
        >
            <TextInput
                color="black"
                sx={{ width: '100%' }}
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                label="أدخل بريدك الإلكتروني لإعادة إرسال رابط التفعيل"
            />
            <Button type='submit' sx={{ ...VerfiedEmailBtn }}>إعادة الإرسال</Button>
        </Box>
        <ToastWrapper/>
    </Box>
);
}

export default ContentResend
