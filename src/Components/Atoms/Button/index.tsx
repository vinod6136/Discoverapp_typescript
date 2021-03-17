import React from 'react';
import './styles.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit" | "reset" | undefined;
    className?: string;
    btnValue: string;

}

const Button: React.FC<ButtonProps> = ({ type, btnValue }) => {
    return (
        <button type={type} className="btn">{btnValue}</button>
    )
}

export default Button