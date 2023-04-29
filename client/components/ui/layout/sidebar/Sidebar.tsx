import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import {} from 'react-icons/md';

const Sidebar: FC = () => (
	<section className="sidebar">
		<Link href={'/'} className="logo" rel="noreferrer">
			<Image src="logo.png" alt="Youtube" width={130} height={42}></Image>
		</Link>
		<div className="profile_info">
			<Image src="avatar.jpg" alt="" width={70} height={70}></Image>
			<div className="name">Nannie Nelson</div>
			<div className="location">Montreal, QC</div>
		</div>
		<div className="information">
			<div className="item">
				<div className="top">278</div>
				<div className="bottom">videos</div>
			</div>
			<div className="item">
				<div className="top">36.5k</div>
				<div className="bottom">subscribers</div>
			</div>
		</div>
		<div className="line"></div>
		<ul className="mnu_sidebar">
			<li>
				<Link href={'#'}>
					<Image src="multimedia.svg" alt=""></Image>
					<b>Video</b>
				</Link>
			</li>
			<li>
				<Link href={'#'}>
					<Image src="video-camera/svg" alt=""></Image>
					<b>Movies & Shows</b>
				</Link>
			</li>
		</ul>
	</section>
);

export default Sidebar;
