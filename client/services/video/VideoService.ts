import { ResponseVideo, VideoDto } from '@/shared/interfaces/video.interface';
import axios, { axiosClassic } from '../../api/interceptor';

export const VideoService = {
	async getVideosByUser(userId: string) {
		return axios.get<ResponseVideo[]>(`/videos/by-user/${userId}`);
	},

	async getVideosByCurrentUser() {
		return axios.get<ResponseVideo[]>(`/videos/by-user-private`);
	},

	async getVideoById(id: string) {
		return axiosClassic.get<ResponseVideo>(`/videos/${id}`);
	},

	async getAllVideos(id: string) {
		return axiosClassic.get<ResponseVideo[]>(`/videos`);
	},

	async getMostPopular(id: string) {
		return axiosClassic.get<ResponseVideo[]>(`/videos/most-popular`);
	},

	async getVideoPrivateById(id: string) {
		return axios.get<ResponseVideo>(`/videos/get-private/${id}`);
	},

	async createVideo() {
		return axios.post<string>(`/videos`);
	},

	async updateVideo(id: string, body: VideoDto) {
		return axios.put<string>(`/videos/${id}`, body);
	},

	async updateViews(id: string) {
		return axios.put<string>(`/videos/update-views/${id}`);
	},

	async updateLikes(id: string) {
		return axios.put<string>(`/videos/update-likes/${id}`);
	},

	async deleteVideo(id: string) {
		return axios.delete<void>(`/videos/${id}`);
	},
};
