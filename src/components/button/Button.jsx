import React from 'react';
import './button.css';

const Button = ({ value, className, disabled, type }) => {
    return (
        <input type={type} value={value} className={className} disabled={disabled} />
    );
};

export default Button;