import TextStudentInput from "../common/TextStudentInput";
import StudentAvatar from "./StudentAvatar";
import { Grid, Box, CircularProgress, Typography } from "@mui/material";  
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { studentService } from "../../../services/studentService";
import Headings from "../../../utils/Headings/Headings";

const StudentInfo = () => {
    const id = Cookies.get("id");
    const role = Cookies.get("role");

    // Fetching Student Info
    const { data, isLoading, error } = useQuery({
        queryKey: ["student", id],
        queryFn: () => studentService(id),
        enabled: !!id && role === "Student", // ✅ Prevents unnecessary queries
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
            <Headings>المعلومات الشخصية</Headings>
        <Box 
            sx={{
                padding: "20px 0",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: {xs:'center', sm:'space-evenly'},
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
                        enabled={false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>  
                    <TextStudentInput
                        type="text"
                        label="الإسم الثاني"
                        value={student?.lastName || ""}
                        enabled={false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>  
                    <TextStudentInput
                        type="text"
                        label="الإيميل"
                        value={student?.email || ""}
                        enabled={false}
                    />
                </Grid>
            </Grid>
        </Box>

        </div>
    );
};

export default StudentInfo;
