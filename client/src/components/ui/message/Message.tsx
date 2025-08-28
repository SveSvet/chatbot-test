import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Typography } from '../typography/Typography.tsx';

interface MessageProps {
  sender: 'user' | 'bot';
  text: string;
  className?: string;
}

export const Message: React.FC<MessageProps> = ({
  sender,
  text,
  className,
}) => {
  return (
    <div className={clsx(styles.message, className)}>
      <Typography className={styles.sender}>{sender}</Typography>
      <Typography className={styles.text}>{text}</Typography>
    </div>
  );
};
