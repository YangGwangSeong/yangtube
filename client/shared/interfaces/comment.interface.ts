import { ResponseUser } from '@/shared/interfaces/user.interface';
import { ResponseVideo } from '@/shared/interfaces/video.interface';

export interface ResponseComment {
	id: string;
	user: ResponseUser;
	video: ResponseVideo;
	message: string;
	createdAt: string;
	updatedAt: string;
}

export interface CommentDto extends Pick<ResponseComment, 'message'> {
	videoId: string;
}
