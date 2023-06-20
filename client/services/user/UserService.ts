import { ResponseUser, UserDto } from '@/shared/interfaces/user.interface';
import axios, { axiosClassic } from 'api/interceptor';

export const UserService = {
	async getProfile() {
		return await axios.get<ResponseUser>('/users/profile');
	},

	async getMostPopular() {
		return await axiosClassic.get<ResponseUser[]>('/users/most-popular');
	},

	async updateProfile(body: UserDto) {
		return await axios.put<UserDto>('/users/profile', body);
	},
};
