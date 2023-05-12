import React, { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AuthForm.module.scss';
import Field from '@/components/ui/field/Field';

const AuthForm: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.button}>
				<FaUserCircle fill="#A4A4A4"></FaUserCircle>
			</button>
			<div className={styles.form}>
				<Field></Field>
			</div>
		</div>
	);
};

export default AuthForm;
