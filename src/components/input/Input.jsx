import React from 'react';
import './input.css';

const Input = React.forwardRef((props,ref) => {
    const { placeholder, value, handler, type, name, required } = props;
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="search"
            value={value}
            ref={ref}
            onChange={handler}
            />
    );
});

export default Input;