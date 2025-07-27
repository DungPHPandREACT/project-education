import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { URL } from '../apis-config';

const URLCourses = `${URL}/api/courses`;

const coursesApis = {
	getAllCoursesPopular: (params) => {
		return axios.get(`${URLCourses}/popular`, { params });
	},
};

export const useGetAllCoursesPopular = (params) => {
	return useQuery({
		queryKey: ['courses-popular'],
		queryFn: async () => await coursesApis.getAllCoursesPopular(params),
		select: (data) => data.data.data,
	});
};
