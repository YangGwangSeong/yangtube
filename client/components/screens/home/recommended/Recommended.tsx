import VideoItem from '@/components/ui/video-item/VideoItem';
import { ResponseVideo } from '@/shared/interfaces/video.interface';
import Image from 'next/image';
import React, { FC } from 'react';

const Recommended: FC<{ newVideos: ResponseVideo[] }> = ({ newVideos }) => {
	return (
		<div className="recommended">
			<div className="top_block">
				<div className="left_title title_gray">
					<h2>Recommended</h2>
					<div className="showmore">Show More</div>
				</div>
				<div className="sort">By View Trending</div>
			</div>

			<div className="catalog">
				{newVideos.map(video => (
					<VideoItem item={video} key={video.id} isAvatar></VideoItem>
				))}
			</div>
		</div>
	);
};

export default Recommended;
