import React from 'react';
import './styles.css'

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "password" | "email" | undefined;
    value?: string;
    name?: string;
    content?: string

}

const Input: React.FC<inputProps> = ({ type, name, value, content, ...props }) => {
    return (
        <input type={type} className="input" value={value} name={name} placeholder={content} />
    )
}
export default Input