import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
import { Button } from './button.interface';

const Button: FC<PropsWithChildren<Button>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	);
};

export default Button;
