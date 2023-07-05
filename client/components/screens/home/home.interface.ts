import { ResponseUser } from '@/shared/interfaces/user.interface';
import { ResponseVideo } from '@/shared/interfaces/video.interface';

export interface HomeProps {
	randomVideo: ResponseVideo;
	topVideo: ResponseVideo;
	topChannels: ResponseUser[];
	newVideos: ResponseVideo[];
	weeklyVideos: ResponseVideo[];
}
