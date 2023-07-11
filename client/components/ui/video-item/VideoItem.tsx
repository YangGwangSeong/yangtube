import { ResponseVideo } from '@/shared/interfaces/video.interface';
import { formatNumberToK } from '@/utils/formatNumberToK';
import Image from 'next/image';
import React, { FC, useRef } from 'react';

const VideoItem: FC<{ item: ResponseVideo }> = ({ item }) => {
	const ref = useRef<HTMLVideoElement>(null);
	return (
		<div className="video_item">
			<div className="thumbnail">
				<Image
					src={item.thumbnailPath}
					alt={item.name}
					width={163}
					height={91}
				></Image>
				<video className="hidden" ref={ref}>
					<source type="video/mp4"></source>
				</video>
				<time>
					{ref.current?.duration &&
						Math.floor(ref.current?.duration / 60) +
							':' +
							('0' + Math.floor(ref.current.duration % 60)).slice(-2)}
				</time>
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
