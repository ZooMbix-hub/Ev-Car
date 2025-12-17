import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography';
import s from './Tag.module.css';

export interface TagProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

export const Tag = ({ children, theme = 'light' }: TagProps) => {
  return (
    <div className={clsx(s.tag, s[theme])}>
      <Typography >
        {children}
      </Typography>
    </div>
  );
};