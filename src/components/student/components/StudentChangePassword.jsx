import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'
import TextStudentInput from '../common/TextStudentInput'
import { studentService } from '../../../services/studentService';
import { useQuery } from '@tanstack/react-query';
import Cookies from "js-cookie";
import { ButtonSaveChanges } from '../../../styles/StudentStyles';
import { MAIL_REGEX, PWD_REGEX } from '../../Auth/constants/regex';
import { api } from '../../../api/api';
import { CHANGE_PWD } from '../../../api/endpoints';

const EditableField = ({type, label, value, onChange}) => {
    return (
        <Grid item xs={12} sm={6}>  
        <TextStudentInput
            type={type}
            label= {label}
            value={value || ""}
            onChange={onChange}
            enabled={true}
        />
    </Grid>
    )
}

const StudentChangePassword = () => {
        const id = Cookies.get("id");
        const role = Cookies.get("role");
        const [success, setSuccess] = useState("");
        const [errormsg, setError] = useState(null);

        // Fetching Student Info
        const { data, isLoading, error } = useQuery({
            queryKey: ["student", id],
            queryFn: () => studentService.getStudentInfo(id),
            enabled: !!id && role === "Student",
            staleTime: 0, // Data will be considered stale immediately
            cacheTime: 0, // Data will not be cached    
        });
    
        const student = data?.data;
    
        // Form Data
        const [formData, setFormData] = useState({username: student?.email || "", currentPassword: "", newPassword: ""});
        
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
    },[]);

    // Handle Save Changes
    const handleSaveChanges = useCallback(async(e) => {
        e.preventDefault();
        setError('');
        setSuccess('')

            if(!MAIL_REGEX.test(formData.username))
                return setError("الإيميل غير صالح")
            if(!PWD_REGEX.test(formData.currentPassword) || !PWD_REGEX.test(formData.newPassword))
                return setError("كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، بما في ذلك حرف كبير وحرف صغير ورقم ورمز خاص")
            try{
            await api.post(CHANGE_PWD, formData);
            setSuccess("تم حفظ التغييرات بنجاح");
        }catch(err){
            setError("حدث خطأ أثناء حفظ التغييرات");
        }
    },[formData])

        // Loading state
        if (isLoading) {
            return (
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                    <CircularProgress />  
                </Box>
            );
        }
    
        // Error state
        if (error) {
            return (
                <Box textAlign="center" p={2}>
                    <Typography color="error">⚠️ Error loading student info</Typography>
                </Box>
            );
        }
    
  return (
    <Box component={'form'} onSubmit={handleSaveChanges} sx={{textAlign:'right', padding:'20px'}}>
            <Box
                sx={{
                    padding: "20px 0",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "space-evenly" },
                    gap: 2,
                }}
            >

                <Grid container spacing={2} sx={{ maxWidth: "90%" }}>  
                        <EditableField
                            type="email"
                            label="الإيميل"
                            onChange={(e) => handleChange({target :{name:'username', value: e.target.value}})}
                            value={formData?.username || ""}
                        />
                        <EditableField
                            type="password"
                            label="كلمة المرور الحالية"
                            onChange={(e) => handleChange({target :{name: 'currentPassword', value: e.target.value}})}
                            value={formData?.currentPassword || ""}
                        />
                        <EditableField
                            type="password"
                            label="كلمة المرور الجديدة"
                            onChange={(e) => handleChange({target :{name:'newPassword', value: e.target.value}})}
                            value={formData?.newPassword || ""}
                        />
                </Grid>
            </Box>
            <Button
            sx={{ ...ButtonSaveChanges, margin:'20px auto'}}
            type="submit">حفظ التغييرات</Button>
            {success && <Typography color="green" textAlign="center">{success}</Typography>}
            {errormsg && <Typography color="red" textAlign="center">{errormsg}</Typography>}

    </Box>
  )
}

export default StudentChangePassword
