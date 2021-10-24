import React from 'react';
import {Box, Button} from "@mui/material";
import {useSelector} from "react-redux";

const Winner = () => {
  const winners = useSelector(state => state.participants.participants.length);

  return (
    <Box className="winner">
      <h2 className="winner__title">Total participants: {winners}</h2>
      <Button fullWidth variant="contained" color="success" disabled={winners ? false : true}>
        Show winner
      </Button>
    </Box>
  );
};

export default Winner;
