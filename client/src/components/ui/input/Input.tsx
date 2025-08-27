import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input {...props} className={clsx(styles.input, className)} />;
};
