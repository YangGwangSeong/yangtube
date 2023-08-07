import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import IconsRight from './icons/IconsRight';
import Search from './search/Search';

const Header: FC = () => {
	return (
		<header>
			<Search></Search>
			<IconsRight></IconsRight>
		</header>
	);
};

export default Header;
