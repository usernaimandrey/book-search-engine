import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ value, className, disabled, type }) => {
    return (
        <input type={type} value={value} className={className} disabled={disabled} />
    );
};

Button.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: '',
    value: '',
    className: '',
    disabled: false,
};

export default Button;