import * as React from "react";
import { ButtonHTMLAttributes } from 'react';
import './style.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size: 'small' | 'normal' | 'large'
    color: 'red' | 'green' | 'blue'
    text: string
 }

 const Button = ({  color, size, text, ...props }: ButtonProps): JSX.Element => {
    const onClickButton = (e) => {
        if(props.onClick){
            props.onClick(e)
            console.log(e)
        }
    }

    return (
        <button {...props} onClick={onClickButton} className={size+ ' ' +color}>
            {text}
        </button>
    )
 }

 export {
    Button,
 }
 