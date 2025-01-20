import { Box, Button, Typography } from '@mui/material'
import React from 'react'

// Styles
import { VerfiedEmailText } from '../../../../../styles/globalStyles'
import { VerfiedEmailBtn } from '../../../../../styles/globalStyles'
import { FlexboxCenter,FlexBoxCol } from '../../../../../styles/globalStyles'
import TextInput from '../../../common/TextInput'

const ContentResend = () => {
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
        <Box
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
                label="أدخل بريدك الإلكتروني لإعادة إرسال رابط التفعيل"
            />
            <Button sx={{ ...VerfiedEmailBtn }}>إعادة الإرسال</Button>
        </Box>
    </Box>
);
}

export default ContentResend
