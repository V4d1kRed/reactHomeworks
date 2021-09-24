import React from 'react';
import classes from "./CustomButton.module.css";

const CustomButton = ({children, ...props}) => {
  return (
    <button className={classes.customButton} {...props}>{children}</button>
  );
};

export default CustomButton;
