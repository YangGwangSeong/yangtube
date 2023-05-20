import React, { FC, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AuthForm.module.scss';
import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthFields } from './auth-form.interface';
import { validEmail } from './auth.constants';
import { useOutside } from '@/hooks/useOutside';
import { useMutation } from 'react-query';
import { AuthService } from '@/services/auth/auth.service';
import { useAuth } from '@/hooks/useAuth';

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AuthFields>({
		mode: 'onChange',
	});

	const { setData } = useAuth();

	const { mutate: login } = useMutation(
		'login',
		(data: AuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setData) setData(data);
			},
		},
	);

	const onSubmit: SubmitHandler<AuthFields> = data => {
		if (type === 'login') login(data);
		else if (type === 'register') console.log('register', data.email);
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={styles.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill="#A4A4A4"></FaUserCircle>
			</button>
			{isShow && (
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
						type={'password'}
						placeholder="Password"
						error={errors.password}
					></Field>
					<div className={'mt-5 mb-1 text-center'}>
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
			)}
		</div>
	);
};

export default AuthForm;
