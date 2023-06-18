import { ResponseUser } from '@/shared/interfaces/user.interface';
import axios from 'api/interceptor';

export const UserService = {
	async login(email: string, password: string) {
		const response = await axios.post<ResponseUser>('/auth/login', {
			email: email,
			password: password,
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},
};
