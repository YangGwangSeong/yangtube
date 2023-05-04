import React, { FC } from 'react';
import Line from '@/ui/line/Line';
import MostPopularVideo from '@/ui/layout/right-side/most-popular-video/MostPopularVideo';
import TopChannels from '@/ui/layout/right-side/top-channel/TopChannels';

const RightSide: FC = () => {
	return (
		<div className="right_side">
			<MostPopularVideo></MostPopularVideo>

			<Line></Line>

			<TopChannels></TopChannels>
		</div>
	);
};

export default RightSide;
