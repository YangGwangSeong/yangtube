import { ResponseUser } from '@/shared/interfaces/user.interface';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatNumberToK } from '@/utils/formatNumberToK';

const ChannelItem: FC<{ item: ResponseUser }> = ({ item }) => {
	return (
		<div className="channel">
			<div className="info_left">
				<Link href={`/c/${item.id}`}>
					<Image src="avatar.jpg" alt=""></Image>
				</Link>
				<div className="info">
					<div className="name">{item.name}</div>
					<div>{formatNumberToK(item.subscripbersCount)} Subscribers</div>
				</div>
			</div>
			<Link href="#" className="mnu">
				<Image src="open_menu.svg" alt=""></Image>
			</Link>
		</div>
	);
};

export default ChannelItem;
