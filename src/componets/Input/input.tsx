import * as React from "react";
import { useState } from "react";
import { InputHTMLAttributes } from 'react';
import './style.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement>
   
 
 const Input = ({  ...props }: InputProps): JSX.Element => { 
    const {placeholder, onChange, ...rest} = props;
    const [value, setValue] = useState(''); 

    const heanslerOnChange = (e) => {
        setValue(e.target.value)
        if(onChange){
            onChange(e)
        }
    }

    const heanslerDelete = (e) => {
        setValue('')
        if(onChange){
            onChange(e)
        }
    }
    

    return (
        <div>
            <Input {...rest} className={'input'} 
                onChange={heanslerOnChange} 
                value={value} 
                placeholder={placeholder || 'Enter text'}>
            </Input>
            {value && <div className={'delete'} onClick={heanslerDelete}></div>}
        </div>
        
    )
 }

 export {
    Input,
 }