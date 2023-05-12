import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import IconsRight from './icons/IconsRight';

const Header: FC = () => {
	return (
		<header>
			<div className="search_top">
				<label>
					<input
						type="text"
						placeholder="Search videos, starts or authors..."
					/>
					<Image src="search.svg" alt=""></Image>
				</label>
			</div>
			<IconsRight></IconsRight>
		</header>
	);
};

export default Header;
