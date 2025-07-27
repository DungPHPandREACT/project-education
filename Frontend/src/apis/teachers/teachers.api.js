import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { URL } from '../apis-config';

const URLTeachers = `${URL}/api/teachers`;

const teachersApis = {
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
