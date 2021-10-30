import React from 'react';
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";

const ComeBack = ({children}) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <Button fullWidth variant="contained" color="secondary" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ComeBack;
