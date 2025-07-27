import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { URL } from '../apis-config';

const URLCategories = `${URL}/api/categories`;

const categoriesApis = {
	getAllCategories: () => {
		return axios.get(URLCategories);
	},
};

export const useGetAllCategories = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: async () => await categoriesApis.getAllCategories(),
		select: (data) => data.data.data,
	});
};
