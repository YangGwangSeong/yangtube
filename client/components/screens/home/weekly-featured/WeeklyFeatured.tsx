import Image from 'next/image';
import React, { FC } from 'react';
import Slider from './Slider';
import { ResponseVideo } from '@/shared/interfaces/video.interface';
import VideoItem from '@/components/ui/video-item/VideoItem';

interface WeeklyFeaturedProps {
	weeklyVideos: ResponseVideo[];
	randomVideo: ResponseVideo;
}

const WeeklyFeatured: FC<WeeklyFeaturedProps> = ({
	weeklyVideos,
	randomVideo,
}) => {
	return (
		<div className="weekly_featured">
			<div className="info_wf">
				<div className="sub_name">Weekly Featured</div>
				<h1>Hello, Summer Vacation!</h1>
				<div className="descr">
					Loerm ipsum dolor sit amet, consectetur adipisicing elit. Aliguam
					harum
				</div>
				<Slider videos={weeklyVideos} />
			</div>

			<div className="top_video">
				<VideoItem item={randomVideo} isAvatar isLarge></VideoItem>
			</div>
		</div>
	);
};

export default WeeklyFeatured;
