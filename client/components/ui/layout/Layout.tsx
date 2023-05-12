import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import Sidebar from '@/ui/layout/sidebar/Sidebar';
import Header from '@/ui/layout/header/Header';
import Head from 'next/head';
import { useAuth } from '@/hooks/useAuth';

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => {
	const { user } = useAuth();

	// content-full : width 100% user가 없을때 Sidebar가 없으니까
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main>
				<Sidebar></Sidebar>
				<section
					className={cn('content', {
						'content-full': !user,
					})}
				>
					<Header></Header>
					<div className="content_wrapper">{children}</div>
				</section>
			</main>
		</>
	);
};

export default Layout;
