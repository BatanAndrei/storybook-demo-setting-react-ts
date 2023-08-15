import * as React from "react";
import { ButtonHTMLAttributes } from 'react';
import './style.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size: 'small' | 'normal' | 'large'
 }

 const Button = ({ size, children, ...props }: ButtonProps): JSX.Element => {
    return (
        <button {...props} className={size}>
            {children}
        </button>
    )
 }

 export {
    Button,
 }
 