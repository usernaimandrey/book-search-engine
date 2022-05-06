import React from 'react';
import PropTypes from 'prop-types';
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

Input.defaultProps = {
    type: 'text',
    name: '',
    placeholder: '',
    required: false,
    className: '',
    value: '',
    handler: () => {},
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    handler: PropTypes.func,
}

export default Input;