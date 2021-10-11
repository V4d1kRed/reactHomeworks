import React from 'react';
import {Button} from "@mui/material";

const PreviousButton = ({children, onClick, props}) => {
  return (
    <div>
       <Button onClick={onClick} variant="outlined" {...props}>{children}</Button>
    </div>
  );
};

export default PreviousButton;
