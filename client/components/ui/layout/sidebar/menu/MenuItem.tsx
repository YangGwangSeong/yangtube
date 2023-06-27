import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from './menu.interface';

const MenuItem: FC<{ item: MenuItem }> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>
				<Image src={item.image} alt={item.title}></Image>
				<b>{item.title}</b>
			</Link>
		</li>
	);
};

export default MenuItem;
