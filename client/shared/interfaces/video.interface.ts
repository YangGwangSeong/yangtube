import { ResponseUser } from '@/shared/interfaces/user.interface';

export interface ResponseVideo {
	id: string;
	name: string;
	description: string;
	thumbnailPath: string;
	videoPath: string;
	views: number;
	likes: number;
	user?: ResponseUser;
	isPublic?: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface VideoDto
	extends Pick<
		ResponseVideo,
		'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
