import React, { FC, forwardRef } from 'react';
import { Field as IField } from './field.interface';
import cn from 'classnames';
import styles from './Field.module.scss';

const Field: FC = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.field} style={style}>
				<input ref={ref} type={type} {...rest}></input>

				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	},
);

Field.displayName = 'Field';

export default Field;
