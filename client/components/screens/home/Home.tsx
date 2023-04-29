import Header from '@/components/ui/layout/header/Header';
import Sidebar from '@/components/ui/layout/sidebar/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import WeeklyFeatured from './weekly-featured/WeeklyFeatured';

const Home: FC = () => {
	return (
		<main>
			<Sidebar></Sidebar>
			<section className="content">
				<Header></Header>
				<div className="wrapper_content">
					<WeeklyFeatured></WeeklyFeatured>
				</div>
			</section>
		</main>
	);
};

export default Home;
