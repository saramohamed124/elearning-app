import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { INSTRUCTOR_COURSES } from '../api/endpoints';

const useInstructorCourses = (InstructorId) => {
  return useQuery({
    queryKey:['InstructorIdCourses'],
    queryFn: async() => {
        const res = await api.get(`${INSTRUCTOR_COURSES}/${InstructorId}`);
        return res?.data.data
    }
})
}

export default useInstructorCourses
