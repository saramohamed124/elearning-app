import { api } from "../api/api";
import { STUDENT_INFO } from "../api/endpoints";

export const studentService = {
    getStudentInfo : async(id) => 
        {
            const { data } = await api.get(`${STUDENT_INFO}/${id}`);
            return data;        
        },
    updateStudentInfo : async(id, formData) =>{
        const { data } = await api.put(`${STUDENT_INFO}/${id}`,{ id, ...formData});
        return data;
    }
}
