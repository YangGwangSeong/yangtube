import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/services/auth/auth.service';
import Image from 'next/image';
import Link from 'next/link';
import { defaultValueAuthState } from 'providers/AuthProvider';
import React, { FC } from 'react';
import Line from '../../line/Line';
import ProfileInfo from './ProfileInfo';
import Menu from './menu/Menu';

const Sidebar: FC = () => {
	const { user, setData } = useAuth();

	return user ? (
		<section className="sidebar">
			<Link href={'/'} className="logo" rel="noreferrer">
				<Image src="logo.png" alt="Youtube" width={130} height={42}></Image>
			</Link>

			<ProfileInfo></ProfileInfo>

			<Line></Line>

			<Menu />

			<button
				id="logout_btn"
				onClick={() => {
					AuthService.logout();
					setData && setData(defaultValueAuthState);
				}}
			>
				Logout
			</button>
			<div className="copy">2023 copy right</div>
		</section>
	) : null;
};

export default Sidebar;
