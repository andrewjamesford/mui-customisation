import "./button.css";

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{label}</MuiButton>;
};

// Set default properties
Button.defaultProps = {
  color: "inherited",
  size: "medium",
  variant: "outlined",
};
