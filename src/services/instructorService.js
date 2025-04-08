import { api } from "../api/api"
import { INSTRUCTOR_INFO } from "../api/endpoints";

export const instructorService = async (id) => {
    const { data } = await api.get(`${INSTRUCTOR_INFO}/${id}`);    
    return data.data;
}