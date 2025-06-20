// useCategories.js
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { GET_CATEGORIES } from '../api/endpoints';

const CATEGORIES_QUERY_KEY = ['categories'];

const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const res = await api.get(GET_CATEGORIES);        
        return res?.data.data;
      } catch (error) {
        // console.error('Error fetching categories:', error);
        throw error; // ✅ throw instead of return
      }
    },
    staleTime:0,
  });
};
export default useCategories;