import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/services/auth/auth.service';
import Image from 'next/image';
import Link from 'next/link';
import { defaultValueAuthState } from 'providers/AuthProvider';
import React, { FC } from 'react';
import { MdPermMedia, MdSupport } from 'react-icons/md';

const Sidebar: FC = () => {
	const { user, setData } = useAuth();

	return user ? (
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
			<div className="switch_wrapper">
				<label className="switch">
					<input type="checkbox" defaultChecked />
					<span className="slider round"></span>
				</label>
				<p>Light On</p>
			</div>

			<button
				id="logout_btn"
				onClick={() => {
					AuthService.logout();
					setData && setData(defaultValueAuthState);
				}}
			>
				Logout
			</button>
		</section>
	) : null;
};

export default Sidebar;
