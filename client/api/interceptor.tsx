import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const getContentType = () => ({
	'Content-Type': 'application/json',
});

export const axiosClassic = axios.create({
	baseURL: `${process.env.APP_URL}/api`,
	headers: getContentType(),
});

export const instance = axios.create({
	baseURL: `${process.env.APP_URL}/api`,
	headers: getContentType(),
});

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken');

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

export default instance;
