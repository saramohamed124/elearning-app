import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";
import { GET_CATEGORIES } from "../api/endpoints";

const CATEGORIES_QUERY_KEY = ['categories'];

const useCategoryId = (categoryId) => {
  return useQuery({
    queryKey: CATEGORIES_QUERY_KEY,
    queryFn: async () => {
      try {
        const res = await api.get(`${GET_CATEGORIES}/${categoryId}`);        
        return res.data.data;
      } catch (error) {
        // console.error('Error fetching categories:', error);
        throw error; // ✅ throw instead of return
      }
    },
    staleTime:0,
    enabled: !!categoryId,
  });
}

export default useCategoryId
