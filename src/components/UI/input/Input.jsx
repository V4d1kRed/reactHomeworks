import React, {forwardRef} from 'react';
import {TextField} from "@mui/material";

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      sx={{margin: '0 0 10px'}}
      variant="outlined"
      size="small"
      fullWidth
      inputRef={ref}
      {...props}
    />
  );
});

export default Input;
