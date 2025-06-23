// useCategories.js
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { GET_CATEGORIES } from '../api/endpoints';

const CATEGORIES_QUERY_KEY = ['categories'];

const useCategories = () => {
  return useQuery({
    queryKey: CATEGORIES_QUERY_KEY,
    queryFn: async () => {
      try {
        const res = await api.get(GET_CATEGORIES);        
        return res?.data.data || [] || res?.data;
      } catch (error) {
        throw error;
      }
    },
    staleTime: 0,
  });
};

export default useCategories;