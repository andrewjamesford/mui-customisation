import './button.css';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonBaseProps = Omit<MuiButtonProps, 'disableRipple'>;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};

Button.defaultProps = {
  color: "inherited",
  size: "medium",
  variant: "outlined",
};