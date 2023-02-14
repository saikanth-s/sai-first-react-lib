import React from 'react';
import { ButtonProps } from './Button.props';
import { Button as MButton } from '@mui/material';

const Button = (props: ButtonProps) => {
    return <MButton {...props}>{props.text}</MButton>;
}

export default Button;