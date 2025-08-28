import type { FC, JSX, ReactNode } from 'react';
// @ts-ignore
import styles from './styles.module.css';
import { clsx } from 'clsx';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface TypographyProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const tagMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
};

export const Typography: FC<TypographyProps> = ({
  variant = 'p',
  children,
  className = '',
}) => {
  const Component = tagMap[variant];
  return (
    <Component className={clsx(styles.typography, styles[variant], className)}>
      {children}
    </Component>
  );
};
