import React from 'react';
import './selectCategories.css';

const SelectCategories = ({
    id, name, className, value, hendler, options,
  }) => {
    return (
      <select
        id={id}
        name={name}
        className={className}
        value={value}
        onChange={hendler}
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

  export default SelectCategories;