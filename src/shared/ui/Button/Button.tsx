import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography';
import s from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  theme?: 'light' | 'dark';
  size?: 'medium' | 'large';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  children,
  theme = 'light',
  size = 'medium',
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button className={clsx(s.button, s[theme], s[size])} {...props}>
      {leftIcon}
      <Typography color={theme === 'light' ? 'secondary' : 'primary'}>
        {children}
      </Typography>
      {rightIcon}
    </button>
  );
};