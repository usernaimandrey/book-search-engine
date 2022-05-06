import React from 'react';
import './sortSelection.css';

const SortSelection = (props) => {
    const { value, id, name, className, handler, options } = props;
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
              <option key={key} value={key} defaultValue>{val}</option>
            );
          }
          return <option key={key} value={key}>{val}</option>;
        })}
      </select>
    );
  };

  export default SortSelection;