import React from 'react';
import Wrapper from "./components/wrapper/Wrapper";
import Container from "./components/container/Container";
import {Box} from "@mui/material";
import RegistrationForm from "./components/registrationForm/RegistrationForm";
import Search from "./components/search/Search";
import ParticipantsList from "./components/participants/participantsList/ParticipantsList";
import {Provider} from "react-redux";
import Modal from "./components/modal/Modal";
import {store} from "./store";

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Box className="app">
          <Container>
            <Box className="app__body">
              <Box className="app__container">
                <Search/>
                <ParticipantsList/>
              </Box>
              <Box className="app__container">
                <RegistrationForm/>
                <Modal></Modal>
              </Box>
            </Box>
          </Container>
        </Box>
      </Wrapper>
    </Provider>
  );
}

export default App;
