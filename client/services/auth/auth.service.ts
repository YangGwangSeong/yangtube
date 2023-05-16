import { axiosClassic } from 'api/interceptor';
import { AuthData, removeTokenFromStorage, saveToStorage } from './auth.helper';

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosClassic.post<AuthData>('/auth/login', {
			email: email,
			password: password,
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response;
	},

	async register(email: string, password: string) {
		const response = await axiosClassic.post<AuthData>('/auth/register', {
			email: email,
			password: password,
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response;
	},

	logout() {
		removeTokenFromStorage();
		localStorage.removeItem('user');
	},
};
