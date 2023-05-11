import React, { FC } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import styles from './iconsRight.module.scss';
import AuthForm from '../auth-form/AuthForm';
import { useAuth } from '@/hooks/useAuth';

const IconsRight: FC = () => {
	const { user } = useAuth();
	return (
		<div className={styles.icons}>
			{!!user && (
				<button className={styles.button}>
					<BsPlusCircleFill fill="#cd3a42"></BsPlusCircleFill>
				</button>
			)}

			{!user && <AuthForm></AuthForm>}
		</div>
	);
};

export default IconsRight;
