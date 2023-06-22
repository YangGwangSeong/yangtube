import React, { FC } from 'react';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { UserService } from '@/services/user/UserService';
import Loader from '../../Loader';

const ProfileInfo: FC = () => {
	const { data, isLoading } = useQuery(
		'get profile',
		() => UserService.getProfile(),
		{ select: ({ data }) => data },
	);

	return isLoading ? (
		<Loader count={5} />
	) : (
		<>
			<div className="profile_info">
				{data?.avatarPath && (
					<Image src={data.avatarPath} alt="" width={70} height={70}></Image>
				)}

				<div className="name">{data?.name}</div>
				<div className="location">{data?.location}</div>
			</div>
			<div className="information">
				<div className="item">
					<div className="top">{data?.videosCount}</div>
					<div className="bottom">videos</div>
				</div>
				<div className="item">
					<div className="top">{data?.subscripbersCount}</div>
					{/* <div className="top">36.5k</div> */}
					<div className="bottom">subscribers</div>
				</div>
			</div>
		</>
	);
};

export default ProfileInfo;
