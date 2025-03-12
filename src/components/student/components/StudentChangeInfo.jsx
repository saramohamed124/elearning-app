import { useState } from "react";
import TextStudentInput from "../common/TextStudentInput";
import StudentAvatar from "./StudentAvatar";
import { Grid, Box, CircularProgress, Typography, IconButton } from "@mui/material";  
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { studentService } from "../../../services/studentService";
import edit_icon from "../assets/Pencil.svg"; // Edit icon

const StudentChangeInfo = () => {
    const id = Cookies.get("id");
    const role = Cookies.get("role");

    // State for edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Fetching Student Info
    const { data, isLoading, error } = useQuery({
        queryKey: ["student", id],
        queryFn: () => studentService(id),
        enabled: !!id && role === "Student",
        staleTime: 60000,
    });

    const student = data?.data;

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
        <div>
            <Box display="flex" alignItems="center" justifyContent="space-between">

                {/* Edit Button */}
                <IconButton onClick={() => setIsEditing(!isEditing)}>
                    <img src={edit_icon} alt="edit" width={24} />
                </IconButton>
            </Box>

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

                <Grid container spacing={2} sx={{ maxWidth: "90%" }}>  
                    <Grid item xs={12} sm={6}>  
                        <TextStudentInput
                            type="text"
                            label="الإسم الأول"
                            value={student?.firstName || ""}
                            enabled={isEditing}  // ✅ Controlled by state
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>  
                        <TextStudentInput
                            type="text"
                            label="الإسم الثاني"
                            value={student?.lastName || ""}
                            enabled={isEditing}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>  
                        <TextStudentInput
                            type="text"
                            label="الإيميل"
                            value={student?.email || ""}
                            enabled={isEditing}
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default StudentChangeInfo;
