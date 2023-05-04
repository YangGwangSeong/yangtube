import React, { FC } from 'react';
import Image from 'next/image';

const MostPopularVideo: FC = () => {
	return (
		<div className="live">
			<div className="title_gray">
				<h2>Live</h2>
				<div className="showmore">Show More</div>
			</div>

			<div className="video_item video_live_item">
				<div className="thumbnail">
					<Image src="live.jpg" alt=""></Image>
					<div className="live">Live</div>
					<div className="avatar">
						<Image src="avatar" alt=""></Image>
					</div>
				</div>
				<div className="author">Warren Munoz</div>
				<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
				<div className="descr">
					Loerm ipsum dolor sit amet, consectetur adipisicing elit. Aliguam
					harum
				</div>
				<div className="number_info">
					<div className="views">VIEWS 29.2k</div>
					<div className="comments">COMMENTS 5.8K</div>
				</div>
			</div>
		</div>
	);
};

export default MostPopularVideo;
