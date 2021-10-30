import React from 'react';
import Wrapper from "../components/wrapper/Wrapper";
import {Box} from "@mui/material";
import Container from "../components/container/Container";
import ParticipantsSearch from "../components/search/searchParticipants/ParticipantsSearch";
import ParticipantsList from "../components/participants/participantsList/ParticipantsList";
import Modal from "../components/modal/Modal";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Winner from "../components/winner/Winner";
import ComeBack from "../components/comeBack/ComeBack";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import WinnerCompetition from "../components/winner/winnerCompetition/WinnerCompetition";

const Participants = () => {
  const {competitionId} = useParams();
  const participants = useSelector(state => state.participants.participants);
  const competitions = useSelector(state => state.competitions.competitions);

  const winningParticipant = participants.filter(item => {
    return item.competitionId === +competitionId
  }).sort((a, b) => a.time - b.time)[0];

  const {name, status} = competitions.find(item => item.id === +competitionId);

  return (
    <Wrapper>
      <Box className="app">
        <Container>
          {
            status && winningParticipant
              ?
              <Box style={{padding: '15px 0'}}>
                <WinnerCompetition name={name} winningParticipant={winningParticipant}/>
                <h1 style={{marginBottom: '15px'}}>Participants</h1>
                <ParticipantsList/>
              </Box>
              :
              <Box className="app__body">
                <Box className="app__container">
                  <ParticipantsSearch/>
                  <ParticipantsList/>
                </Box>
                <Box className="app__container">
                  <Modal></Modal>
                  <RegistrationForm/>
                  <Winner/>
                  <ComeBack>
                    Come back
                  </ComeBack>
                </Box>
              </Box>
          }
        </Container>
      </Box>
    </Wrapper>
  );
};

export default Participants;
