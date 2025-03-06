// React & React Hooks & React Router Dom
import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

// MUI
import styled from '@emotion/styled';
import { Box, FormControl, FormLabel, OutlinedInput, TextareaAutosize, Typography } from '@mui/material';

// Global Styles
import { Flexbox, FormCustomStyle, FormRegisterStyle, Gap20, StyledLink } from '../../../../../styles/globalStyles';

// Commons
import ButtonAuth from '../../../common/Button';
import InstructorStudentCard from '../../common/InstructorStudentCard';
import ErrorInputs from '../../../common/ErrorInputs';
import TextInput from '../../../common/TextInput';

// API & End Point
import { api } from '../../../../../api/api';
import { REGISTER_INSTRUCTORS } from '../../../../../api/endpoints';

// Loader
import Spinner from '../../../../../utils/Loader/Spinner';

// Form Reducer & Action Types & validation
import { ACTION_TYPES } from '../../../constants/ActionTypes';
import { formReducer } from '../../../reducers/formReducer';
import { validateInputs } from '../../../utils/validateInputs';

// Utils For Auth
import { ErrorMsgToast, SuccessMsgToast } from '../../../utils/toasts';
import { ToastWrapper } from '../../../utils/ToasterWrapper';
import { handleChangeField } from '../../../reducers/handleChangeField';
import { handleFocus } from '../../../reducers/handleFocus';
import { setToken } from '../../../../../services/authServices';


// State
const intialState = {
    firstName: '',
    lastName: '',
    email: '',
    pwd: '',
    specialty: '',
    bio: '',
    success: '',
    error: '',
    loading: false,
    isValid:{
        firstName: false,
        lastName: false,
        email: false,
        pwd: false,
        specialty: false,
        bio: false,
    },
    isFocus:{
        firstName: false,
        lastName: false,
        email: false,
        pwd: false,
        specialty: false,
        bio: false,
    }
}

const FormRegisterInstructors = () => {
    // Styles
    const FormLabelCustom = styled(FormLabel)({
        fontWeight: "bold",
        margin: '10px 0',
        color:'white'
    });

    const [state, dispatch] = useReducer(formReducer, intialState);

    // Ref
    const userRef = useRef();
    
    // navigation
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/verify-email';

    // Use Effect 
    useEffect(() => {
        userRef.current?.focus();
    }, [])

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

    // Form Style
    const formStyle = useMemo(() => ({ width: {xs:'90%',md:'70%'} }) ,[]);

    // Handle Submit Form
    const handleSubmitRegister = useCallback(async(e)=> {
        e.preventDefault();
        const {firstName, lastName, email, pwd, specialty, bio} = state;        
        dispatch({type: ACTION_TYPES.SET_LOADING, loading: true});
        try{
            const formData = {firstName: firstName, lastName: lastName, email: email, password: pwd, expertise: specialty, biography: bio}
            const response = await api.post(REGISTER_INSTRUCTORS,
                formData,
                {
                    headers:{
                        'Accept':'*/*',
                        'Content-Type':'application/json'      
                    }
                }
            )
            const successMsg = 'تم إنشاء الحساب بنجاح.';
            dispatch({type: ACTION_TYPES.SET_SUCCESS, success: successMsg})
            SuccessMsgToast(successMsg);
            const { token, refreshToken, tokenExpiration, id, role} = response?.data?.data;
            setToken(token, refreshToken, tokenExpiration, id, email, role);
            setTimeout(() => {
            navigate(from, {replace: true});
            },2000)
        }catch(err){
            const errMsg = err?.status ? 'هذا الحساب موجود من قبل':'حدث خطأ أثناء تسجيل الدخول يرجي المحاولة لاحقا';
            dispatch({type: ACTION_TYPES.SET_ERROR, error : errMsg})
            ErrorMsgToast(errMsg)
            if(err?.status === 400){
                setTimeout(() => {
                    navigate('/login')
                } ,2000)
            }
        }finally{
            dispatch({type: ACTION_TYPES.SET_LOADING, loading: false})
        }
    },[from, navigate, state])

    return (
        <Box sx={{...FormCustomStyle}}>
            <Box sx={{...FormRegisterStyle}} component={'form'} onSubmit={handleSubmitRegister}>
            <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
                إنشاء حساب محاضر
            </Typography>
            <FormControl sx={formStyle}>
                <FormLabelCustom htmlFor ="firstname">الإسم الأول</FormLabelCustom>
                <OutlinedInput
                    type='text'
                    inputRef={userRef}
                    autoComplete='off'
                    id='firstname'
                    sx={{ background: 'white' }}
                    placeholder="الإسم الأول"
                    value={state.firstName}
                    onChange={(e) => handleChangeField(dispatch, 'firstName', e.target.value)}
                    onFocus={() => handleFocus(dispatch, 'firstName', true)}
                    onBlur={() => handleFocus(dispatch, 'firstName', false)}
                    required
                    />
                    <ErrorInputs errorMsg={'يجب أن يحتوي الاسم علي حروف من 3 إلى 24 حرف'} visible={state.firstName && state.isFocus.firstName && !state.isValid.firstName} />
            </FormControl>
            <TextInput color = "white" 
                id={'lastname'}
                value={state.lastName}
                onChange={(e) => handleChangeField(dispatch, 'lastName', e.target.value)}
                type={'text'}
                label={'الاسم الأخير'}
                focus={() => handleFocus(dispatch, 'lastName', true)}
                setFocus={() => handleFocus(dispatch, 'lastName', false)}
                errorMsg={'يجب أن يحتوي الاسم علي حروف من 3 إلى 24 حرف'}
                isValid={state.isValid.lastName}
                isFocus={state.isFocus.lastName}
                />
            <TextInput color = "white" 
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
            <TextInput color = "white" 
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
            <TextInput color = "white" 
                id={'specialty'}
                value={state.specialty}
                type={'text'}
                label={'التخصص'}
                onChange={(e) => handleChangeField(dispatch, 'specialty', e.target.value)}
                focus={() => handleFocus(dispatch, 'specialty', true)}
                setFocus={() => handleFocus(dispatch, 'specialty', false)}
                errorMsg={'التخصص يجب ان يتكون من الأحرف فقط بشرط الا يقل عن 5 أحرف'}
                isValid={state.isValid.specialty}
                isFocus={state.isFocus.specialty}
                />
                <FormControl sx={formStyle}>
                <FormLabelCustom >السيرة الذاتية</FormLabelCustom>
                <TextareaAutosize
                minRows={5}
                placeholder="السيرة الذاتية"
                value={state.bio}
                onChange={(e) => handleChangeField(dispatch,'bio', e.target.value)}
                onFocus={() => handleFocus(dispatch, 'bio', true)}
                onBlur={() => handleFocus(dispatch, 'bio', false)}
                required
                ></TextareaAutosize>
                <ErrorInputs errorMsg={'يرجي كتابة وصف لا يقل عن 10 أحرف'} visible={state.bio && state.isFocus.bio && !state.isValid.bio} />
                </FormControl>
                <Box sx={{ width: {xs:'90%',md:'70%'} }}>
                <Box sx={{...Flexbox,...Gap20}}>
                    <span>لديك حساب بالفعل؟</span>
                    <Link style={{...StyledLink}} to="/login">تسجيل الدخول</Link>
                </Box>
                </Box>
            {state.loading ? <div style={{backgroundColor:'var(--main-color-vibrant-orange)', color:'black', fontWeight:'bold', padding:'10px 35px', margin:'10px auto', borderRadius:'5px'}}> <Spinner/></div> :
            <ButtonAuth
                disabled={!Object.values(state.isValid).every(Boolean)}
                > إنشاء حساب</ButtonAuth>}
        </Box>
        <ToastWrapper/>
        <InstructorStudentCard/>
        </Box>
)
}

export default FormRegisterInstructors
