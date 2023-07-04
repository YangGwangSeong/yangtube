import {
	ResponseComment,
	CommentDto,
} from '@/shared/interfaces/comment.interface';
import axios, { axiosClassic } from '../../api/interceptor';

export const CommentService = {
	async getCommentsByVideo(videoId: string) {
		return axios.get<ResponseComment[]>(`/comments/by-video/${videoId}`);
	},

	async createComment(body: CommentDto) {
		return axios.post<ResponseComment>(`/comments`, body);
	},
};
