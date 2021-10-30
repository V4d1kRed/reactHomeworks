import React from 'react';
import Wrapper from "../components/wrapper/Wrapper";
import Container from "../components/container/Container";
import {Box} from "@mui/material";
import AddForm from "../components/addForm/AddForm";

const Create = () => {
  return (
    <Wrapper>
      <Box className="create">
        <Container>
          <Box className="create__body">
            <AddForm/>
          </Box>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default Create;
