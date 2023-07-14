import { ResponseVideo } from '@/shared/interfaces/video.interface';
import { formatNumberToK } from '@/utils/formatNumberToK';
import Image from 'next/image';
import React, { FC } from 'react';
import VideoDuration from './VideoDuration';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

dayjs.extend(relativeTime);

const VideoItem: FC<{ item: ResponseVideo }> = ({ item }) => {
	return (
		<Link href={`/v/${item.id}`}>
			<div className="video_item">
				<div className="thumbnail">
					<Image
						src={item.thumbnailPath}
						alt={item.name}
						width={163}
						height={91}
					></Image>
					<VideoDuration videoPath={item.videoPath}></VideoDuration>
				</div>
				<div className="author">{item.user?.name}</div>
				<div className="name">{item.name}</div>
				<div className="number_info">
					<div className="views">VIEWS {formatNumberToK(item.views)}</div>
					<div className="date">
						{dayjs(new Date(item.createdAt)).fromNow()}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default VideoItem;
