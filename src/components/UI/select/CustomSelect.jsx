import React from 'react';
import classes from "./CustomSelect.module.css";

const CustomSelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      className={classes.customSelect}
      onChange={event => onChange(event.target.value)}>
      <option value="" disabled>{defaultValue}</option>
      {options.map(value => <option value={value} key={value}>{value}</option>)}
    </select>
  );
};

export default CustomSelect;
