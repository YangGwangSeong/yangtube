import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

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
			<div className="icons_right">
				<Link href="#">
					<Image src="plug.svg" alt=""></Image>
				</Link>
				<Link href="#">
					<Image src="review.svg" alt=""></Image>
				</Link>
				<Link href="#">
					<Image src="basket.svg" alt=""></Image>
				</Link>
			</div>
		</header>
	);
};

export default Header;
