import React, { FC, Fragment } from 'react';
import MenuItem from './MenuItem';
import { menu } from './menu.data';

const Menu: FC = () => {
	return (
		<ul className="mnu_sidebar">
			{menu.map((menu, index) => (
				<Fragment key={index}>
					<MenuItem item={menu}></MenuItem>
					{index === 3 && <div className="line_mnu"></div>}
				</Fragment>
			))}
		</ul>
	);
};

export default Menu;
