import React, { FC, PropsWithChildren } from 'react';
import Sidebar from '@/ui/layout/sidebar/Sidebar';
import Header from '@/ui/layout/header/Header';
import Head from 'next/head';

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main>
				<Sidebar></Sidebar>
				<section className="content">
					<Header></Header>
					<div className="content_wrapper">{children}</div>
				</section>
			</main>
		</>
	);
};

export default Layout;
