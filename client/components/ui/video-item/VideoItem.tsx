import { ResponseVideo } from '@/shared/interfaces/video.interface';
import { formatNumberToK } from '@/utils/formatNumberToK';
import Image from 'next/image';
import React, { FC } from 'react';
import VideoDuration from './VideoDuration';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { VideoItem } from './video-item.interface';

dayjs.extend(relativeTime);

const VideoItem: FC<VideoItem> = ({ item, isLarge, isAvatar, tag }) => {
	return (
		<div className="video_item">
			<Link href={`/v/${item.id}`}>
				<div className="thumbnail">
					<Image
						src={item.thumbnailPath}
						alt={item.name}
						width={185}
						height={103}
					></Image>
					<VideoDuration videoPath={item.videoPath}></VideoDuration>
					{tag && <div className="hot">{tag}</div>}
					{isAvatar && (
						<div className="avatar">
							<Image
								src={item.user?.avatarPath || ''}
								alt={item.user?.name || ''}
								width={50}
								height={50}
							></Image>
						</div>
					)}
				</div>
				<div className="author">{item.user?.name}</div>
				<div className="name">{item.name}</div>
			</Link>
			{isLarge && <div className="description">{item.description}</div>}
			<div className="number_info">
				<div className="views">VIEWS {formatNumberToK(item.views)}</div>
				{isLarge && (
					<div className="likes">LIKES {formatNumberToK(item.likes)}</div>
				)}
				<div className="date">{dayjs(new Date(item.createdAt)).fromNow()}</div>
			</div>
		</div>
	);
};

export default VideoItem;
