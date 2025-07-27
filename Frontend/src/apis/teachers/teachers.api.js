import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { URL } from '../apis-config';

const URLTeachers = `${URL}/api/teachers`;

const teachersApis = {
	getAllTeachers: () => {
		return axios.get(`${URLTeachers}`);
	},
	getTopTeachersByCourses: (params) => {
		return axios.get(`${URLTeachers}/top`, { params });
	},
};

export const useGetTopTeachersByCourses = (params) => {
	return useQuery({
		queryKey: ['teachers-coureses'],
		queryFn: async () => await teachersApis.getTopTeachersByCourses(params),
		select: (data) => data.data,
	});
};

export const useGetAllTeachers = (params) => {
	return useQuery({
		queryKey: ['teachers'],
		queryFn: async () => await teachersApis.getAllTeachers(params),
		select: (data) => data.data,
	});
};
