import { api } from "../api/api";
import { STUDENT_INFO } from "../api/endpoints";

export const studentService = async(id) => {
    const { data } = await api.get(`${STUDENT_INFO}/${id}`);
    return data;
}