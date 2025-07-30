import axios from 'axios';

export const URL = 'http://localhost:4000';

const api = axios.create({
	baseURL: URL,
	withCredentials: true,
});

let isRefreshing = false; // Có api nào đang refresh token hay không
let failedQueue = []; // Queue các request bị lỗi do hết hạn token

function processQueue(error, token = null) {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});

	failedQueue = [];
}

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;

			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject });
				}).then(() => api(originalRequest));
			}

			isRefreshing = true;

			try {
				await api.post('/api/auth/refresh');
				processQueue(null);

				return api(originalRequest);
			} catch (err) {
				processQueue(err, null);
				return Promise.reject(err);
			} finally {
				isRefreshing = false;
			}
		}

		return Promise.reject(error);
	}
);

export default api;
