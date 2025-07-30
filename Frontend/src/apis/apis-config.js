import axios from 'axios';

export const URL = 'http://localhost:4000';

const api = axios.create({
	baseURL: URL,
	withCredentials: true,
});


export default api;
