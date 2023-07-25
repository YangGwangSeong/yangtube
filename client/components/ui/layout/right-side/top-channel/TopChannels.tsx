import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ResponseUser } from '@/shared/interfaces/user.interface';
import ChannelItem from './ChannelItem';

const TopChannels: FC<{ channels: ResponseUser[] }> = ({ channels }) => {
	return (
		<div className="top_channels">
			<div className="title_gray">
				<h2>Top Channels</h2>
			</div>

			<div className="list_channels">
				{channels.map(channel => (
					<ChannelItem item={channel} key={channel.id}></ChannelItem>
				))}
			</div>
		</div>
	);
};

export default TopChannels;
