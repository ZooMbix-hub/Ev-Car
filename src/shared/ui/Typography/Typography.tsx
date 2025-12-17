import type { ReactNode } from 'react';
import clsx from 'clsx';
import s from './Typography.module.css';

export interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'paragraph' | 'caption';
  weight?: 'regular' | 'semiBold';
  color?: 'primary' | 'secondary' | 'subtext' | 'bg-1' | 'bg-2' | 'bg-3' | 'wh-trans-1' | 'wh-trans-2';
}

export const Typography = ({
  children,
  variant = 'caption',
  weight = 'regular',
  color = 'primary'
}: TypographyProps) => {
  return (
    <span className={clsx(s[variant], s[weight], s[color])}>
      {children}
    </span>
  );
};