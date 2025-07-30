import { useQuery } from '@tanstack/react-query';
import api, { URL } from '../apis-config';

const URLCategories = `${URL}/api/categories`;

const categoriesApis = {
	getAllCategories: () => {
		return api.get(URLCategories);
	},
};

export const useGetAllCategories = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: async () => await categoriesApis.getAllCategories(),
		select: (data) => data.data.data,
	});
};
