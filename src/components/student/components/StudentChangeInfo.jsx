import { useCallback, useEffect, useState } from "react";
import TextStudentInput from "../common/TextStudentInput";
import StudentAvatar from "./StudentAvatar";
import { Box, CircularProgress, Typography, IconButton, Button,  Grid } from "@mui/material";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { studentService } from "../../../services/studentService";
import editIcon from "../assets/Pencil.svg"; // Edit icon
import { ButtonSaveChanges } from "../../../styles/StudentStyles";
import { EditBtn } from "../../../styles/globalStyles";
import { MAIL_REGEX, NAME_REGEX } from "../../Auth/constants/regex";

const EditableField = ({ label, value, isEditing, onEditToggle, onChange }) => (
    <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "end", justifyContent:'center', gap: 1 }}>
        <TextStudentInput type="text" name={label} label={label} value={value} enabled={label.email !== 'student@gmail.com' ? isEditing : false} onChange={onChange} />
        <IconButton sx={EditBtn} onClick={onEditToggle} aria-label={`Edit ${label}`}>
            <img src={editIcon} alt="Edit" width={24} />
        </IconButton>
    </Grid>
);

const StudentChangeInfo = () => {
    const id = Cookies.get("id");
    const role = Cookies.get("role");
    const [success, setSuccess] = useState("");
    const [errormsg, setError] = useState(null);
    const { data, isLoading, error } = useQuery({
        queryKey: ["student", id],
        queryFn: () => studentService.getStudentInfo(id),
        enabled: !!id && role === "Student",
        staleTime: 0, // Data will be considered stale immediately
        cacheTime: 0, // Data will not be cached
    });

    const student = data?.data;
        const [formData, setFormData] = useState({
        firstName: student?.firstName || "",
        lastName: student?.lastName || "",
        email:  student?.email || "",
    })
    useEffect(() => {
        if (student) {
        setFormData( 
            ({
            firstName: student?.firstName || "",
            lastName: student?.lastName || "",
            email: student?.email || "" 
        }));
    }
    },[student]) // Initialize formData with student data
    const [isEditing, setIsEditing] = useState({firstName: false, lastName: false, email: false});


    // Toggle edit mode for each field
    const toggleEditMode = (field) => setIsEditing((prev) =>({ ...prev, [field]: !prev[field]}));

    // handle Change input fields
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
    },[]);
    // Handle Save Changes
    const handleSaveChanges = useCallback(async(e) => {
        e.preventDefault();
        setError('');
        setSuccess('')

            if(!NAME_REGEX.test(formData.firstName))
                return setError('يجب أن يحتوي الاسم علي حروف من 3 إلى 24 حرف')
            if(!NAME_REGEX.test(formData.lastName))
                return setError('يجب أن يحتوي الاسم علي حروف من 3 إلى 24 حرف')
            if(!MAIL_REGEX.test(formData.email))
                return setError("الإيميل غير صالح")
        try{
            await studentService.updateStudentInfo(id, formData);
            setIsEditing({firstName: false, lastName: false, email: false});
            setSuccess("تم حفظ التغييرات بنجاح");
        }catch(err){
            setError("حدث خطأ أثناء حفظ التغييرات");
        }
    },[formData, id])

    // Loading state
    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                <CircularProgress />
            </Box>
        );
    }

    // Handle Error
    if (error) {
        return (
            <Box textAlign="center" p={2}>
                <Typography color="error">⚠️ Error loading student info</Typography>
            </Box>
        );
    }

    return (
        <Box component={'form'} onSubmit={handleSaveChanges} sx={{width:'100%'}}>
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
            <StudentAvatar />

            <Grid  container spacing={2} sx={{ maxWidth: "90%" }}>
            <EditableField
                    label="الإسم الأول"
                    value={formData.firstName}
                    isEditing={isEditing.firstName}
                    onEditToggle={() => toggleEditMode("firstName")}
                    onChange={(e) => handleChange({target: { name: "firstName", value: e.target.value}})} // Pass the change handler
                />
                <EditableField
                    label="الإسم الأخير"
                    value={formData.lastName || ""}
                    isEditing={isEditing.lastName}
                    onEditToggle={() => toggleEditMode("lastName")} // Pass the correct field
                    onChange={(e) => handleChange({target: { name: "lastName", value: e.target.value}})} // Pass the change handler
                />
                <EditableField
                    label="الإيميل"
                    value={formData.email || ""}
                    isEditing={isEditing.email && formData.email !== 'student@gmail.com'}
                    onEditToggle={() => toggleEditMode("email")}
                    onChange={(e) => handleChange({target: { name: "email", value: e.target.value}})} // Pass the change handler
                />
            </Grid>
        </Box>
            <Button
            sx={{ ...ButtonSaveChanges, margin:'20px auto'}}
            type="submit">حفظ التغييرات</Button>
                {formData.email === 'student@gmail.com' && (<Typography color="red" textAlign="center" sx={{fontSize:'12px', marginTop:'10px'}}> هذا الإيميل للتجربة لا يمكن تعديله</Typography>)}
                {success && <Typography color="green" textAlign="center">{success}</Typography>}
            {errormsg && <Typography color="red" textAlign="center">{errormsg}</Typography>}
        </Box>
    );
};

export default StudentChangeInfo;
