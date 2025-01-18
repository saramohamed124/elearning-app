import { Box, Typography } from '@mui/material';
import React, { useCallback, useEffect, useReducer } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Flexbox, FormCustomStyle, FormRegisterStyle, Gap20, StyledLink } from '../../../../../styles/globalStyles';
import ButtonAuth from '../../../common/Button';
import InstructorStudentCard from '../../common/InstructorStudentCard';
import TextInput from '../../../common/TextInput';
import { formReducer } from '../../../reducers/formReducer';
import { handleChangeField } from '../../../reducers/handleChangeField';
import { handleFocus } from '../../../reducers/handleFocus';
import { validateInputs } from '../../../utils/validateInputs';
import { ACTION_TYPES } from '../../../constants/ActionTypes';
import { ErrorMsgToast, SuccessMsgToast } from '../../../utils/toasts';
import { api } from '../../../../../api/api';
import { REGISTER_STUDENTS } from '../../../endpoints/endpoints';
import Spinner from '../../../../../utils/Loader/Spinner';
import { ToastWrapper } from '../../../utils/ToasterWrapper';

// State
const intialState = {
    firstName: '',
    lastName: '',
    email: '',
    pwd: '',
    success: '',
    error: '',
    loading: false,
    isValid:{
        firstName: false,
        lastName: false,
        email: false,
        pwd: false,
    },
    isFocus:{
        firstName: false,
        lastName: false,
        email: false,
        pwd: false,
    }
}

const FormRegisterStudents = () => {

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
    const handleRegisterStudents = useCallback(async(e) =>{
        e.preventDefault();
        const {firstName, lastName, email, pwd} = state;        
        dispatch({type: ACTION_TYPES.SET_LOADING, loading: true});
        try{
            const formData = {firstName: firstName, lastName: lastName, email: email, password: pwd}
            await api.post(REGISTER_STUDENTS,
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
            setTimeout(() => {
            navigate(from, {replace: true});
            }, 2000)
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
},[state, navigate, from]);
    return (
        <Box sx={{...Flexbox,...FormCustomStyle}}>
        <Box sx={{...FormRegisterStyle}} component={'form'} onSubmit={handleRegisterStudents}>
            <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
                إنشاء حساب طالب
            </Typography>
            <TextInput 
                id={'firstName'}
                value={state.firstName}
                onChange={(e) => handleChangeField(dispatch,'firstName', e.target.value)}
                type={'text'}
                label={'الاسم الأول'}
                focus={() => handleFocus(dispatch,'firstName', true)}
                setFocus={() => handleFocus(dispatch,'firstName', false)}
                errorMsg={'يجب أن يحتوي الاسم علي حروف من 3 إلى 24 حرف'}
                isValid={state.isValid.firstName}
                isFocus={state.isFocus.firstName}
                />
                <TextInput 
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
                    <Box sx={{...Flexbox,...Gap20}}>
                        <span>لديك حساب بالفعل؟</span>
                        <Link style={{...StyledLink}} to="/login">تسجيل الدخول</Link>
                    </Box>
                </Box>
                {state.loading ? <div style={{backgroundColor:'var(--main-color-vibrant-orange)', color:'black', fontWeight:'bold', padding:'10px 35px', margin:'10px auto', borderRadius:'5px'}}> <Spinner/> </div> :
            <ButtonAuth
                disabled={!Object.values(state.isValid).every(Boolean)}
                > إنشاء حساب</ButtonAuth> }
        </Box>
        <ToastWrapper/>
        <InstructorStudentCard/>
    </Box>
)
}

export default FormRegisterStudents
