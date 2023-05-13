import React, { FC, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AuthForm.module.scss';
import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthFields } from './auth-form.interface';
import { validEmail } from './auth.constants';

const AuthForm: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AuthFields>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<AuthFields> = data => {
		if (type === 'login') console.log(data.email);
		else if (type === 'register') console.log('register', data.email);
	};
	return (
		<div className={styles.wrapper}>
			<button className={styles.button}>
				<FaUserCircle fill="#A4A4A4"></FaUserCircle>
			</button>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter a valid email address',
						},
					})}
					placeholder="Email"
					error={errors.email}
				></Field>
				<Field
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Min length should more 6 symbols',
						},
					})}
					placeholder="Password"
					error={errors.password}
				></Field>
				<div className={'mt-2 mb-1 text-center'}>
					<Button type="submit" onClick={() => setType('login')}>
						Login
					</Button>
				</div>
				<Button
					type="submit"
					className={styles.register}
					onClick={() => setType('register')}
				>
					Register
				</Button>
			</form>
		</div>
	);
};

export default AuthForm;
