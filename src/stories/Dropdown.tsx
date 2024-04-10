import { Select as MuiSelect, SelectProps as MuiSelectProps } from '@mui/material'; 

type SelectBaseProps = Omit<MuiSelectProps, ''>;

export interface SelectProps extends SelectBaseProps {
  label: string;
}

export const Dropdown = ({ ...props }: SelectProps) => {
    return <MuiSelect {...props}></MuiSelect>;
};