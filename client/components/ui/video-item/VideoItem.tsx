import { ResponseVideo } from '@/shared/interfaces/video.interface';
import Image from 'next/image';
import React, { FC } from 'react';

const VideoItem: FC<{ item: ResponseVideo }> = ({ item }) => {
	return (
		<div className="video_item">
			<div className="thumbnail">
				<Image
					src={item.thumbnailPath}
					alt={item.name}
					width={163}
					height={91}
				></Image>
				<time>16:55</time>
			</div>
			<div className="author">Michel Adams</div>
			<div className="name">Day in my life: Summer ...</div>
			<div className="number_info">
				<div className="views">VIEWS 28.6K</div>
				<div className="date">6DS AGO</div>
			</div>
		</div>
	);
};

export default VideoItem;
