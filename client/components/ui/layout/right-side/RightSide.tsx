import React, { FC } from 'react';
import Line from '@/ui/line/Line';
import MostPopularVideo from '@/ui/layout/right-side/most-popular-video/MostPopularVideo';
import TopChannels from '@/ui/layout/right-side/top-channel/TopChannels';
import { ResponseVideo } from '@/shared/interfaces/video.interface';
import { ResponseUser } from '@/shared/interfaces/user.interface';

const RightSide: FC<{
	topVideo: ResponseVideo;
	topChannels: ResponseUser[];
}> = () => {
	return (
		<div className="right_side">
			<MostPopularVideo></MostPopularVideo>

			<Line></Line>

			<TopChannels></TopChannels>
		</div>
	);
};

export default RightSide;
