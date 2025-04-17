import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { INSTRUCTOR_INFO } from '../api/endpoints';

export const useFetchInstructorId = (InstructorId) => {
  return useQuery({
      queryKey: ['instructorInfo', InstructorId],
      queryFn: async () => {
        const res = await api.get(`${INSTRUCTOR_INFO}/${InstructorId}`);
        return res?.data.data;
      },
      enabled: !!InstructorId,
      staleTime: 0,
    });
  
}

