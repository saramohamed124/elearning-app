import styled from '@emotion/styled';
import { Box, FormControl, FormLabel,  MenuItem, OutlinedInput, Select, TextareaAutosize, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Flexbox, FormCustomStyle, FormRegisterStyle, Gap20 } from '../../../../../styles/globalStyles';
import ButtonAuth from '../../../common/Button';
import InstructorStudentCard from '../../common/InstructorStudentCard';
import ErrorInputs from '../../../common/ErrorInputs';

// Validation
const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}/; 
const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){8,24}/; 
const BIO_REGEX = /^[a-zA-Z]{10,100}/;

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
    

    // Ref
    const userRef = useRef();
    const errRef = useRef();

    // User
    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNmFocus, setFirstNmFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNmFocus, setLastNmFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPWD] = useState('');
    const [validPWD, setValidPWD] = useState(false);
    const [pwdFocus, setPWDFocus] = useState(false);


    const [specialty, setSpecialty] = useState(0);
    const [validSpecialty, setValidSpecialty] = useState(false);
    const [specialtyFocus, setSpecialtyFocus] = useState(false);

    const [bio, setBio] = useState('');
    const [validBio, setValidBio] = useState(false);
    const [bioFocus, setBioFocus] = useState(false);


    // Error & Success Msg
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // Use Effect 
    useEffect(() => {
        userRef.current.focus();
    }, [])

     /* Validation Test */
    
     // First Name Validation
    useEffect(() => {
        const resfirstNm = NAME_REGEX.test(firstName);
        setValidFirstName(resfirstNm);
    },[firstName])

    // Last Name Validation
    useEffect(() => {
        const reslastNm = NAME_REGEX.test(lastName);
        setValidLastName(reslastNm);
    },[lastName])

    // Gmail Validation
    useEffect(() => {
        const resEmail = MAIL_REGEX.test(email);
        setValidEmail(resEmail);
    },[email])

    // PWD Validation
    useEffect(() => {
        const respwd = PWD_REGEX.test(pwd);
        setValidPWD(respwd);
    },[pwd])

    // BIO Validation
    useEffect(() => {
        const resBio = BIO_REGEX.test(bio);
        setValidBio(resBio)
    },[bio])

  return (
    <Box sx={{...FormCustomStyle}}>
        <Box sx={{...FormRegisterStyle}} component={'form'}>
        <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '50px auto' }}>
            إنشاء حساب محاضر
        </Typography>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <FormLabelCustom htmlFor ="firstname">الإسم الأول</FormLabelCustom>
            <OutlinedInput
                type='text'
                inputRef={userRef}
                autoComplete='off'
                id='firstname'
                sx={{ background: 'white' }}
                placeholder="الإسم الأول"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => setFirstNmFocus(true)}
                onBlur={() => setFirstNmFocus(false)}
                required
                />
                <ErrorInputs errorMsg={'يجب أن يحتوي الاسم علي حروف من 3 إلى 24'} visible={firstName && firstNmFocus && !validFirstName} />
        </FormControl>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <FormLabelCustom htmlFor='lastname'>الإسم الأخير</FormLabelCustom>
            <OutlinedInput
                type='text'
                autoComplete='off'
                id='lastname'
                sx={{ background: 'white' }}
                placeholder="الإسم الأخير"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => setLastNmFocus(true)}
                onBlur={() => setLastNmFocus(false)}
                required
            />
            <ErrorInputs errorMsg={'يجب أن يحتوي الاسم علي حروف من 3 إلى 24'} visible={lastName && lastNmFocus && !validLastName} />
        </FormControl>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <FormLabelCustom>الايميل</FormLabelCustom>
            <OutlinedInput
            type='email'
            value={email}
            sx={{ background: 'white' }}
            placeholder="الايميل"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            required
            />
            <ErrorInputs errorMsg={'يرجى إدخال ايميل صالح'} visible={email && emailFocus && !validEmail} />
        </FormControl>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
            <FormLabelCustom>كلمة المرور</FormLabelCustom>
            <OutlinedInput
            type='password'
            sx={{ background: 'white' }}
            placeholder="كلمة المرور"
            value={pwd}
            onChange={(e) => setPWD(e.target.value)}
            onFocus={() => setPWDFocus(true)}
            onBlur={() => setPWDFocus(false)}
            required
            />
            <ErrorInputs errorMsg={'كلمة المرور يجب أن تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز، ولا تقل عن 8 أحرف'} visible={pwd && pwdFocus && !validPWD} />
        </FormControl>
        <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
        <FormLabelCustom>التخصص</FormLabelCustom>
        <Select
        sx={{ background: 'white' }}
        inputProps={{ 'aria-label': 'التخصص' }}
        defaultValue='اختر التخصص'
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        onFocus={() => setValidSpecialty(true)}
        onBlur={() => setValidSpecialty(false)}
        required
        >
          <MenuItem value={10}>التصميم</MenuItem>
          <MenuItem value={20}>البرمجة</MenuItem>
          <MenuItem value={30}>ادارة الاعمال</MenuItem>
        </Select>
        <ErrorInputs errorMsg={'يجب اختيار تخصص'} visible={specialty && specialtyFocus && !validSpecialty} />
      </FormControl>
      <FormControl sx={{ width: {xs:'90%',md:'70%'} }}>
        <FormLabelCustom >السيرة الذاتية</FormLabelCustom>
        <TextareaAutosize
        minRows={5}
        placeholder="السيرة الذاتية"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        onFocus={() => setValidBio(true)}
        onBlur={() => setValidBio(false)}
        required
        ></TextareaAutosize>
        <ErrorInputs errorMsg={'يرجي كتابة وصف لا يقل عن 10 أحرف'} visible={bio && bioFocus && !validBio} />
      </FormControl>
        <Box sx={{ width: {xs:'90%',md:'70%'} }}>
            <Box sx={{...Flexbox,...Gap20}}>
                <span>لديك حساب بالفعل؟</span>
                <StyledLink to="/login">تسجيل الدخول</StyledLink>
            </Box>
        </Box>
        <ButtonAuth>إنشاء حساب</ButtonAuth>
    </Box>
    <InstructorStudentCard/>
</Box>
)
}

export default FormRegisterInstructors
