import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Search: FC = () => {
	return (
		<div className="search_top">
			<label>
				<input type="text" placeholder="Search videos, starts or authors..." />
				<Image src="search.svg" alt=""></Image>
			</label>
		</div>
	);
};

export default Search;
