import { ResponseVideo } from '@/shared/interfaces/video.interface';

export interface VideoItem {
	item: ResponseVideo;
	isLarge?: boolean;
	isAvatar?: boolean;
	tag?: string;
}
