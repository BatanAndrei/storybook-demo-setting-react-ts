import * as React from "react";
import { useState } from "react";
import { InputHTMLAttributes } from 'react';
import './style.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement>
   
 
 const Input = ({  ...props }: InputProps): JSX.Element => { 
    const {placeholder, onChange, ...rest} = props;
    const [value, setValue] = useState(''); 

    const heandlerOnChange = (e) => {
        setValue(e.target.value)
        if(onChange){
            onChange(e)
        }
    }

     const heandlerDelete = (e) => {
        setValue('')
        if(onChange){
            onChange(e)
        }
    }
    

    return (
        <div>
            <input {...rest} className={'input'} 
                onChange={heandlerOnChange} 
                value={value} 
                placeholder={placeholder || 'Enter text'}>
            </input>
              {value && <div className={'delete'} onClick={heandlerDelete}></div>}
        </div>
        
    )
 }

 export {
    Input,
 }