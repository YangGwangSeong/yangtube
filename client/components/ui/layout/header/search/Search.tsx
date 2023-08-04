import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearch } from '@/hooks/useSearch';
import VideoItem from '@/components/ui/video-item/VideoItem';

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();
	return (
		<div className="search_top">
			<label>
				<input
					type="text"
					placeholder="Search videos, starts or authors..."
					value={searchTerm}
					onChange={handleSearch}
				/>
				<Image src="/" alt="" width={40} height={40}></Image>
			</label>
			{isSuccess && (
				<div className="result shadow-block">
					{data?.length ? (
						data.map(video => (
							<VideoItem item={video} key={video.id}></VideoItem>
						))
					) : (
						<div>Videos not found!</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
