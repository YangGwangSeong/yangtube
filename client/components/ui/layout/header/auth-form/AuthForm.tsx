import React, { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AuthForm.module.scss';

const AuthForm: FC = () => {
	return (
		<div>
			<button className={styles.button}>
				<FaUserCircle fill="#A4A4A4"></FaUserCircle>
			</button>
		</div>
	);
};

export default AuthForm;
