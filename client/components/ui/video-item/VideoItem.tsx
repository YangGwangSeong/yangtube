import { ResponseVideo } from '@/shared/interfaces/video.interface';
import { formatNumberToK } from '@/utils/formatNumberToK';
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
				<time>{item.createdAt}</time>
			</div>
			<div className="author">{item.user?.name}</div>
			<div className="name">{item.name}</div>
			<div className="number_info">
				<div className="views">VIEWS {formatNumberToK(item.views)}</div>
				<div className="date">{item.createdAt}</div>
			</div>
		</div>
	);
};

export default VideoItem;
