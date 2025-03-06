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
import { ErrorMsgToast, SuccessMsgToast } from '../../../utils/toasts'
import { useLocation, useNavigate } from 'react-router-dom'
import { MAIL_REGEX } from '../../../constants/regex'

const ContentResend = () => {

        const [email, setEmail] = useState('');
        const location = useLocation();
        const navigate = useNavigate();
        const from = location.state?.from?.pathname || '/verify-email';
    
        const handleResendEmailVerfication = useCallback(async (e) => {
            e.preventDefault();
        
            if (!MAIL_REGEX.test(email)) {
                ErrorMsgToast('يرجى إدخال بريد إلكتروني صحيح.');
                return;
            }
        
            try {
                await api.post(RESEND_EMAIL, { email });
                SuccessMsgToast('تم إرسال ايميل التفعيل بنجاح. تحقق من بريدك الإلكتروني.');
        
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 2000);
            } catch (err) {
                const errMsg = err.response?.data?.message || 'حدث خطأ أثناء إعادة الإرسال، يرجى المحاولة لاحقاً';
                ErrorMsgToast(errMsg);
            }
        }, [email, from, navigate]);
        
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
                        onBlur={() => console.log("Blur Event - Email:", email)} // Debugging
                        label="أدخل بريدك الإلكتروني لإعادة إرسال رابط التفعيل"
                        errorMsg={'يرجى إدخال ايميل صالح'}
                    />
                    <Button type='submit' sx={{ ...VerfiedEmailBtn }}>إعادة الإرسال</Button>
                </Box>
                <ToastWrapper/>
            </Box>
        );
    }
    

export default ContentResend
