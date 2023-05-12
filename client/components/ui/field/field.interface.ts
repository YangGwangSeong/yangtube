import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface FieldProps {
	error?: FieldError | undefined;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export interface Field extends TypeInputPropsField {}
