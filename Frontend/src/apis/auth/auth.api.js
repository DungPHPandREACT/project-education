import { useMutation } from '@tanstack/react-query';
import api, { URL } from '../apis-config';

const URLAuth = `${URL}/api/auth`;

const authApis = {
	login: (data) => {
		return api.post(`${URLAuth}/login`, data);
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
