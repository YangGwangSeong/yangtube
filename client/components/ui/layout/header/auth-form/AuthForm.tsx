import React, { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AuthForm.module.scss';

const AuthForm: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.button}>
				<FaUserCircle fill="#A4A4A4"></FaUserCircle>
			</button>
			<div className={styles.form}></div>
		</div>
	);
};

export default AuthForm;
