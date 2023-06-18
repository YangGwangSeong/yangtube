import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/services/auth/auth.service';
import Image from 'next/image';
import Link from 'next/link';
import { defaultValueAuthState } from 'providers/AuthProvider';
import React, { FC } from 'react';
import { MdPermMedia, MdSupport } from 'react-icons/md';
import Line from '../../line/Line';
import ProfileInfo from './profile-info/ProfileInfo';

const Sidebar: FC = () => {
	const { user, setData } = useAuth();

	return user ? (
		<section className="sidebar">
			<Link href={'/'} className="logo" rel="noreferrer">
				<Image src="logo.png" alt="Youtube" width={130} height={42}></Image>
			</Link>
			<ProfileInfo></ProfileInfo>
			<Line></Line>
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
