import { useQuery } from '@tanstack/react-query'
import { api } from '../api/api'
import { STUDENT_INFO } from '../api/endpoints'

const useFetchStudents = () => {
  return useQuery({
    queryKey: ['studentInfo'],
    queryFn: async () => {
        const res = await api.get(STUDENT_INFO);
        return res?.data.data;
    },
    staleTime: 0,
  })
}

export default useFetchStudents
