import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ResponseUser } from '@/shared/interfaces/user.interface';

const TopChannels: FC<{ channels: ResponseUser[] }> = ({ channels }) => {
	return (
		<div className="top_channels">
			<div className="title_gray">
				<h2>Top Channels</h2>
				<div className="showmore">Show More</div>
			</div>

			<div className="list_channels">
				<div className="channel">
					<div className="info_left">
						<Image src="avatar.jpg" alt=""></Image>
						<div className="info">
							<div className="name">LEGO</div>
							<div>6.2M Subscribers</div>
						</div>
					</div>
					<Link href="#" className="mnu">
						<Image src="open_menu.svg" alt=""></Image>
					</Link>
				</div>

				<div className="channel">
					<div className="info_left">
						<Image src="avatar.jpg" alt=""></Image>
						<div className="info">
							<div className="name">LEGO</div>
							<div>6.2M Subscribers</div>
						</div>
					</div>
					<Link href="#" className="mnu">
						<Image src="open_menu.svg" alt=""></Image>
					</Link>
				</div>

				<div className="channel">
					<div className="info_left">
						<Image src="avatar.jpg" alt=""></Image>
						<div className="info">
							<div className="name">LEGO</div>
							<div>6.2M Subscribers</div>
						</div>
					</div>
					<Link href="#" className="mnu">
						<Image src="open_menu.svg" alt=""></Image>
					</Link>
				</div>

				<div className="channel">
					<div className="info_left">
						<Image src="avatar.jpg" alt=""></Image>
						<div className="info">
							<div className="name">LEGO</div>
							<div>6.2M Subscribers</div>
						</div>
					</div>
					<Link href="#" className="mnu">
						<Image src="open_menu.svg" alt=""></Image>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopChannels;
