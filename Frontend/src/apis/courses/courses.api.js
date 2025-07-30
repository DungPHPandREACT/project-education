import { useQuery } from '@tanstack/react-query';
import api, { URL } from '../apis-config';

const URLCourses = `${URL}/api/courses`;

const coursesApis = {
	getAllCourses: () => {
		return api.get(URLCourses);
	},
	getAllCoursesPopular: (params) => {
		return api.get(`${URLCourses}/popular`, { params });
	},
	getCourseById: (id) => {
		return api.get(`${URLCourses}/${id}`);
	},
};

export const useGetAllCoursesPopular = (params) => {
	return useQuery({
		queryKey: ['courses-popular'],
		queryFn: async () => await coursesApis.getAllCoursesPopular(params),
		select: (data) => data.data.data,
	});
};

export const useGetAllCourses = (params) => {
	return useQuery({
		queryKey: ['courses'],
		queryFn: async () => await coursesApis.getAllCourses(),
		select: (data) => data.data.data,
	});
};

export const useGetCourseById = (id) => {
	return useQuery({
		queryKey: ['course', id],
		queryFn: async () => await coursesApis.getCourseById(id),
		select: (data) => data.data.data,
	});
};
