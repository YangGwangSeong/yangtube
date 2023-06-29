import { ResponseVideo } from '@/shared/interfaces/video.interface';
import axios, { axiosClassic } from '../../api/interceptor';

export const VideoService = {
	async getVideoByUser(userId: string) {
		return axios.get<ResponseVideo[]>(`/video/by-user/${userId}`);
	},

	async getVideoByCurrentUser() {
		return axios.get<ResponseVideo[]>(`/video/by-user-private`);
	},

	async getVideoById(id: string) {
		return axiosClassic.get<ResponseVideo>(`/video/${id}`);
	},

	async getAllVideos(id: string) {
		return axiosClassic.get<ResponseVideo[]>(`/video`);
	},
};
