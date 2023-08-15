import * as React from "react";
import { ButtonHTMLAttributes } from 'react';
import './style.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size: 'small' | 'normal' | 'large'
    color: 'red' | 'green' | 'blue'
 }

 const Button = ({ color, size, children, ...props }: ButtonProps): JSX.Element => {
    return (
        <button {...props} className={size+ ' ' +color}>
            {children}
        </button>
    )
 }

 export {
    Button,
 }
 