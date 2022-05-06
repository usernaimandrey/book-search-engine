import React from 'react';
import PropTypes from 'prop-types';
import './selectCategories.css';

const SelectCategories = ({
    id, name, className, value, handler, options,
  }) => {
    return (
      <select
        id={id}
        name={name}
        className={className}
        value={value}
        onChange={handler}
      >
        {options.map(([key, val]) => {
          if (key.startsWith('*')) {
            return (
              <option
                key={key}
                value={key}
                defaultValue
              >
                {val}
              </option>
            );
          }
          return (
            <option
              key={key}
              value={key}
            >
              {val}
            </option>
          );
        })}
      </select>
    );
  };

  SelectCategories.defaultProps = {
    id: '',
    name: '',
    className: '',
    value: '',
    handler: () => {},
    options: [],
  };

  SelectCategories.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    handler: PropTypes.func,
    options: PropTypes.array,
  };

  export default SelectCategories;