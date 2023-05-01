import Image from 'next/image';
import React, { FC } from 'react';

const Recommended: FC = () => {
	return (
		<div className="recommended">
			<div className="top_block">
				<div className="left_title title_gray">
					<h2>Recommended</h2>
					<div className="showmore">Show More</div>
				</div>
				<div className="sort">By View Trending</div>
			</div>

			<div className="catalog">
				<div className="video_item">
					<div className="thumbnail">
						<Image src="4.jpg" alt=""></Image>
						<time>28:32</time>
						<div className="avatar">
							<Image src="avatar" alt=""></Image>
						</div>
					</div>
					<div className="author">Warren Munoz</div>
					<div className="name">
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className="number_info">
						<div className="views">VIEWS 29.2k</div>
						<div className="date">3DS AGO</div>
					</div>
				</div>

				<div className="video_item">
					<div className="thumbnail">
						<Image src="4.jpg" alt=""></Image>
						<time>28:32</time>
						<div className="avatar">
							<Image src="avatar" alt=""></Image>
						</div>
					</div>
					<div className="author">Warren Munoz</div>
					<div className="name">
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className="number_info">
						<div className="views">VIEWS 29.2k</div>
						<div className="date">3DS AGO</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recommended;
