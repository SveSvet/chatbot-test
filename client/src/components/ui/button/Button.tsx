import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Typography } from '../typography/Typography.tsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      <Typography>{children}</Typography>
    </button>
  );
};

export default Button;
