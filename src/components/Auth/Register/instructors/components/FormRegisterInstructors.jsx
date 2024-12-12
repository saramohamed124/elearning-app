import styled from '@emotion/styled';
import { Box, FormControl, FormLabel, MenuItem, OutlinedInput, Select, TextareaAutosize, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Flexbox, FormCustomStyle, FormRegisterStyle, Gap20 } from '../../../../../styles/globalStyles';
import ButtonAuth from '../../../common/Button';
import InstructorStudentCard from '../../common/InstructorStudentCard';
import ErrorInputs from '../../../common/ErrorInputs';
import TextInput from '../../../common/TextInput';
import { api } from '../../../../../api/api';
import Spinner from '../../../../../utils/Loader/Spinner';
import toast, { Toaster } from 'react-hot-toast';


// API
const  REGISTER_INSTRUCTORS = 'api/Auth/register-instructor'

// Validation
const NAME_REGEX = /^[a-zA-Z\u0600-\u06FF\s][a-zA-Z\u0600-\u06FF0-9-_]{2,24}/; 
const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){7,24}/; 
const SPECIALTY_REGEX = /^[a-zA-Z\u0600-\u06FF\s]{5,24}$/;
const BIO_REGEX = /^.{9,100}/;

// State
const intialState = {
    firstName: '',
    lastName: '',
    email: '',
    pwd: '',
    specialty: '',
    bio: '',
    success: 'success',
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

// Action Types
const ACTION_TYPES = {
    SET_FIELD: 'SET_FIELD',
    SET_VALIDATY: 'SET_VALIDATY',
    SET_FOCUS: 'SET_FOCUS',
    SET_SUCCESS: 'SET_SUCCESS',
    SET_ERROR: 'SET_ERROR',
    SET_LOADING: 'SET_LOADING',
}

// Form Reducer
const formReducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.SET_FIELD:
            return {...state, [action.field]: action.value};
        case ACTION_TYPES.SET_FOCUS:
            return {...state, isFocus: {...state.isFocus, [action.field]: action.isFocus}};    
        case ACTION_TYPES.SET_VALIDATY:
            return {...state, isValid: {...state.isValid, [action.field]: action.isValid}};    
        case ACTION_TYPES.SET_SUCCESS:
            return {...state, success: action.success, error: '', loading: false};
        case ACTION_TYPES.SET_ERROR:
            return {...state, error: action.error, success: '', loading: false};
        case ACTION_TYPES.SET_LOADING:
            return {...state, loading: action.loading};
        default:
            return state;
    }
}

const FormRegisterInstructors = () => {
    // Styles    
    const FormLabelCustom = styled(FormLabel)({
        fontWeight: "bold",
        margin: '10px 0',
        color:'white'
    });

    const StyledLink = styled(Link)({
        display:'block',
        color: '#2D54E0',
    });

    const [state, dispatch] = useReducer(formReducer, intialState);

    // Ref
    const userRef = useRef();
    toast.success(state.success, {
        position: "top-left",
        // duration: 20000, 
        style:{
            backgroundColor:'var(--main-color-orange-gold)',
            color:'white',
            fontSize:'16px',
            padding:'10px',
            icon: '✔️',
        }
    });

    // Use Effect 
    useEffect(() => {
        userRef.current.focus();
    }, [])

     // Validation
    const validateInputs = useCallback((field,value) => {
        switch(field){
            case 'firstName':
            case 'lastName':
                return NAME_REGEX.test(value);
            case 'email':
                return MAIL_REGEX.test(value);
            case 'pwd':
                return PWD_REGEX.test(value);
            case 'specialty':
                return SPECIALTY_REGEX.test(value);
            case 'bio':
                return  BIO_REGEX.test(value);;
            default:
                return value;
        }
    },[])

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
    },[state, validateInputs])

    // Handle Change Field
    const handleChangeField = useCallback((field,value) => {
        dispatch({type: ACTION_TYPES.SET_FIELD, field, value})
    }, []);

    // Handle Focus Field
    const handleFocus = useCallback((field,value) => {
        dispatch({ type: ACTION_TYPES.SET_FOCUS, field, isFocus: value})
    },[])

    // Form Style
    const formStyle = useMemo(() => ({ width: {xs:'90%',md:'70%'} }) ,[]);

    // Handle Submit Form
    const handleSubmitRegister = useCallback(async(e)=> {
        e.preventDefault();
        const {firstName, lastName, email, pwd, specialty, bio} = state;        
        dispatch({type: ACTION_TYPES.SET_LOADING, loading: true});
        try{
            const formData = {firstName: firstName, lastName: lastName, email: email, password: pwd, expertise: specialty, biography: bio}
            const res = await api.post(REGISTER_INSTRUCTORS,
                formData,
                {
                    headers:{
                        'Accept':'*/*',
                        'Content-Type':'application/json'      
                    }
                }
            )
            dispatch({type: ACTION_TYPES.SET_SUCCESS, success:'تم إنشاء الحساب بنجاح.'})
            toast.success(state.success, {
                position: "top-left",
                duration: 20000, 
                style:{
                    backgroundColor:'var(--main-color-green)',
                    color:'white',
                    fontSize:'16px',
                    padding:'10px',
                    icon: '✔️',
                }
            });
            const { token } = res.token;
            localStorage.setItem('userToken',token)
        }catch(err){
            if(err?.status){
                dispatch({type: ACTION_TYPES.SET_ERROR, error: 'هذا الحساب موجود من قبل'})
            }else{
                dispatch({type: ACTION_TYPES.SET_ERROR, error: 'حدث خطأ أثناء تسجيل الدخول يرجي المحاولة لاحقا'})
            }
        }finally{
            dispatch({type: ACTION_TYPES.SET_LOADING, loading: false})
        }
    },[state])

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
                    onChange={(e) => handleChangeField('firstName', e.target.value)}
                    onFocus={() => handleFocus('firstName', true)}
                    onBlur={() => handleFocus('firstName', false)}
                    required
                    />
                    <ErrorInputs errorMsg={'يجب أن يحتوي الاسم علي حروف من 3 إلى 24 حرف'} visible={state.firstName && state.isFocus.firstName && !state.isValid.firstName} />
            </FormControl>
            <TextInput 
                id={'lastname'}
                value={state.lastName}
                onChange={(e) => handleChangeField('lastName', e.target.value)}
                type={'text'}
                label={'الاسم الأخير'}
                focus={() => handleFocus('lastName', true)}
                setFocus={() => handleFocus('lastName', false)}
                errorMsg={'يجب أن يحتوي الاسم علي حروف من 3 إلى 24 حرف'}
                isValid={state.isValid.lastName}
                isFocus={state.isFocus.lastName}
                />
            <TextInput 
                id={'email'}
                value={state.email}
                onChange={(e) => handleChangeField('email', e.target.value)}
                type={'email'}
                label={'الايميل'}
                focus={() => handleFocus('email', true)}
                setFocus={() => handleFocus('email', false)}
                errorMsg={'يرجى إدخال ايميل صالح'}
                isValid={state.isValid.email}
                isFocus={state.isFocus.email}
                />
            <TextInput 
                id={'password'}
                value={state.pwd}
                type={'password'}
                label={'كلمة المرور'}
                onChange={(e) => handleChangeField('pwd', e.target.value)}
                focus={() => handleFocus('pwd', true)}
                setFocus={() => handleFocus('pwd', false)}
                errorMsg={'كلمة المرور يجب أن تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز، ولا تقل عن 8 أحرف'}
                isValid={state.isValid.pwd}
                isFocus={state.isFocus.pwd}
                />
            <TextInput 
                id={'specialty'}
                value={state.specialty}
                type={'text'}
                label={'التخصص'}
                onChange={(e) => handleChangeField('specialty', e.target.value)}
                focus={() => handleFocus('specialty', true)}
                setFocus={() => handleFocus('specialty', false)}
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
                onChange={(e) => handleChangeField('bio', e.target.value)}
                onFocus={() => handleFocus('bio', true)}
                onBlur={() => handleFocus('bio', false)}
                required
                ></TextareaAutosize>
                <ErrorInputs errorMsg={'يرجي كتابة وصف لا يقل عن 10 أحرف'} visible={state.bio && state.isFocus.bio && !state.isValid.bio} />
                </FormControl>
            <Box sx={formStyle}>
                <Box sx={{...Flexbox,...Gap20}}>
                    <span>لديك حساب بالفعل؟</span>
                    <StyledLink to="/login">تسجيل الدخول</StyledLink>
                </Box>
            </Box>
            <ButtonAuth
                disabled={!Object.values(state.isValid).every(Boolean)}
                >{state.loading ? <Spinner/> : 'إنشاء حساب'}</ButtonAuth>
        </Box>
        {/* <Toaster
            toastOptions={{
                success: {
                    style: {
                    border: "1px solid #4caf50",
                    padding: "16px",
                    color: "#4caf50",
                    },
                },
                }}
                /> */}
        <p style={{color: 'green'}}>{state.success}</p>
        <InstructorStudentCard/>
        </Box>
)
}

export default FormRegisterInstructors
