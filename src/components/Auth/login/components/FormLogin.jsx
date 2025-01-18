// FormLogin.jsx
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React, { useCallback, useEffect, useReducer } from 'react';
import ButtonAuth from '../../common/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Flexbox, FlexboxEnd, FormLoginCostum, Gap20 } from '../../../../styles/globalStyles';
import { handleChangeField } from '../../reducers/handleChangeField';
import TextInput from '../../common/TextInput';
import { formReducer } from '../../reducers/formReducer';
import { handleFocus } from '../../reducers/handleFocus';
import { ACTION_TYPES } from '../../constants/ActionTypes';
import { ErrorMsgToast, SuccessMsgToast } from '../../utils/toasts';
import { api } from '../../../../api/api';
import { validateInputs } from '../../utils/validateInputs';
import Spinner from '../../../../utils/Loader/Spinner';
import { LOGIN } from '../../endpoints/endpoints';
import { ToastWrapper } from '../../utils/ToasterWrapper';

const FormCostum = styled(Box)(({ theme }) => ({
    backgroundColor: 'var(--main-dark-midnight-blue)',
    color: 'white',
    padding: '0 40px',
    flexDirection: 'column',
    flex: '1',
}));

const StyledLink = styled(Link)({
    display:'block',
    color: '#2D54E0',
});

// State
const intialState = {
    email: '',
    pwd: '',
    success: '',
    error: '',
    loading: false,
    isValid:{
        email: false,
        pwd: false,
    },
    isFocus:{
        email: false,
        pwd: false,
    }
}
const FormLogin = () => {
    
    // Reducer
        const [state, dispatch] = useReducer(formReducer, intialState);
    
            // navigation
            const location = useLocation();
            const navigate = useNavigate();
            const from = location.state?.from?.pathname || '/verify-email';
        
            // Validation
                useEffect(() => {
                    const validationFields = () => {
                        Object.keys(state).forEach((key) => {
                            if(key in state.isValid){
                                const isValid = validateInputs(key, state[key]);
                                dispatch({type: ACTION_TYPES.SET_VALIDATY, field: key, isValid})
                            }
                        })
                    }    
                    validationFields();
                },[state])
        
            // Handle Submit Students
            const handleLogin = useCallback(async(e) =>{
                e.preventDefault();
                const {email, pwd} = state;        
                dispatch({type: ACTION_TYPES.SET_LOADING, loading: true});
                try{
                    const formData = { email: email, password: pwd}
                    await api.post(LOGIN,
                        formData,
                        {
                            headers:{
                                'Accept':'*/*',
                                'Content-Type':'application/json'      
                            }
                        }
                    )
                    const successMsg = 'تم تسجيل الدخول بنجاح';
                    dispatch({type: ACTION_TYPES.SET_SUCCESS, success: successMsg})
                    SuccessMsgToast(successMsg);
                    setTimeout(() => {
                    navigate(from, {replace: true});
                    }, 2000)
                }catch(err){
                    const errMsg = err?.status ? 'هذا الحساب غير موجود من قبل':'حدث خطأ أثناء تسجيل الدخول يرجي المحاولة لاحقا';
                    dispatch({type: ACTION_TYPES.SET_ERROR, error : errMsg})
                    ErrorMsgToast(errMsg)
                    if(err?.status === 401){
                        setTimeout(() => {
                            navigate('/register-instructor')
                        } ,2000)
                    }
                }finally{
                    dispatch({type: ACTION_TYPES.SET_LOADING, loading: false})
                }
        },[state, navigate, from]);
        
    return (
        <FormCostum sx={Flexbox}>
            <Box sx={{...FormLoginCostum}} component={'form'} onSubmit={handleLogin}>
                <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
                    تسجيل الدخول
                </Typography>
                <TextInput
                id={'email'}
                value={state.email}
                onChange={(e) => handleChangeField(dispatch, 'email', e.target.value)}
                type={'email'}
                label={'الايميل'}
                focus={() => handleFocus(dispatch, 'email', true)}
                setFocus={() => handleFocus(dispatch, 'email', false)}
                errorMsg={'يرجى إدخال ايميل صالح'}
                isValid={state.isValid.email}
                isFocus={state.isFocus.email}
                />
            <TextInput 
                id={'password'}
                value={state.pwd}
                type={'password'}
                label={'كلمة المرور'}
                onChange={(e) => handleChangeField(dispatch, 'pwd', e.target.value)}
                focus={() => handleFocus(dispatch, 'pwd', true)}
                setFocus={() => handleFocus(dispatch, 'pwd', false)}
                errorMsg={'كلمة المرور يجب أن تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز، ولا تقل عن 8 أحرف'}
                isValid={state.isValid.pwd}
                isFocus={state.isFocus.pwd}
                />
                <Box sx={{ width: {xs:'90%',md:'70%'} }}>
                    <StyledLink to="/forget-password" style={{margin:'10px 0'}}>نسيت كلمة السر؟</StyledLink>
                    <Box sx={{...FlexboxEnd,...Gap20}}>
                        <span>ليس لديك حساب؟</span>
                        <StyledLink to="/register-instructor">إنشاء حساب</StyledLink>
                    </Box>
                </Box>
                {state.loading ? <div style={{backgroundColor:'var(--main-color-vibrant-orange)', color:'black', fontWeight:'bold', padding:'10px 35px', margin:'10px auto', borderRadius:'5px'}}> <Spinner/> </div> :
            <ButtonAuth
                disabled={!Object.values(state.isValid).every(Boolean)}
                > تسجيل الدخول</ButtonAuth> }
            </Box>
            <ToastWrapper/>
        </FormCostum>
    );
};

export default FormLogin;