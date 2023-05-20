import Image from 'next/image';
import React, { FC } from 'react';
import Slider from './Slider';

const WeeklyFeatured: FC = () => {
	return (
		<div className="weekly_featured">
			<div className="info_wf">
				<div className="sub_name">Weekly Featured</div>
				<h1>Hello, Summer Vacation!</h1>
				<div className="descr">
					Loerm ipsum dolor sit amet, consectetur adipisicing elit. Aliguam
					harum
				</div>
				<Slider />
			</div>

			<div className="top_video">
				<div className="video_item">
					<div className="thumnail">
						<Image src="3jpg" alt=""></Image>
						<time>28:32</time>
						<div className="avatar">
							<Image src="avatar" alt=""></Image>
						</div>
					</div>
					<div className="author">Warrn Munoz</div>
					<div className="name">
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className="descr">
						Loerm ipsum dolor sit amet, consectetur adipisicing elit. Aliguam
						harum
					</div>
					<div className="number_info">
						<div className="views">VIEWS 29.2K</div>
						<div className="likes">LIKES 1.6K</div>
						<div className="data">3DS AGO</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeeklyFeatured;
