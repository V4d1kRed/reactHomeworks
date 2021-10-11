import React from 'react';
import {Container} from "@mui/material";

const MainContainer = ({children, ...props}) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      container="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
