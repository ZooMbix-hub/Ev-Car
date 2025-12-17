import { Typography } from '../Typography';
import s from './TextField.module.css';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField = ({ label, ...props }: TextFieldProps) => {
  return (
    <div className={s.wrapper}>
      <Typography>
        {label}
      </Typography>
      <input
        className={s.textField}
        {...props}
      />
    </div>
  );
};