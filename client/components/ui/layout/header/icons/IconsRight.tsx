import React, { FC } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import styles from './iconsRight.module.scss';

const IconsRight: FC = () => {
	return (
		<div className={styles.icons}>
			<button>
				<BsPlusCircleFill fill="#cd3a42"></BsPlusCircleFill>
			</button>
		</div>
	);
};

export default IconsRight;
