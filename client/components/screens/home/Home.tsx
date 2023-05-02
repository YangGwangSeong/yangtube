import React, { FC } from 'react';
import WeeklyFeatured from './weekly-featured/WeeklyFeatured';
import Line from '@/components/ui/line/Line';
import Recommended from './recommended/Recommended';
import RightSide from '@/components/ui/layout/right-side/RightSide';
import Layout from '@/components/ui/layout/Layout';

const Home: FC = () => {
	return (
		<Layout title="Yangtube">
			<div className="wrapper_content">
				<div className="left_side">
					<WeeklyFeatured></WeeklyFeatured>

					<Line />

					<Recommended />
				</div>
				<RightSide></RightSide>
			</div>
		</Layout>
	);
};

export default Home;
