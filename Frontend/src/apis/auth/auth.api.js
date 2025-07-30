import { useMutation, useQuery } from '@tanstack/react-query';
import api, { URL } from '../apis-config';

const URLAuth = `${URL}/api/auth`;

const authApis = {
	login: (data) => {
		return api.post(`${URLAuth}/login`, data);
	},
	getUserCurrent: () => {
		return api.get(`${URLAuth}/me`);
	},
};

export const useLogin = ({ onSuccess, onError }) => {
	return useMutation({
		mutationFn: (payload) => authApis.login(payload),
		onSuccess: (variable, response) => {
			onSuccess(variable, response);
		},
		onError: (error) => {
			onError(error);
		},
	});
};

export const useGetUserCurrent = (o) => {
	return useQuery({
		queryFn: () => authApis.getUserCurrent(),
		queryKey: ['user-current'],
		select: (response) => response.data.data,
		...o,
	});
};
