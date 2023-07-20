import React, { FC } from 'react';
import Image from 'next/image';
import { ResponseVideo } from '@/shared/interfaces/video.interface';
import VideoItem from '@/components/ui/video-item/VideoItem';

const MostPopularVideo: FC<{ video: ResponseVideo }> = ({ video }) => {
	return (
		<div className="live">
			<div className="title_gray">
				<h2>Top video</h2>
			</div>

			<VideoItem item={video} tag={'🔥Hot'} isAvatar></VideoItem>
		</div>
	);
};

export default MostPopularVideo;
