import React, {Fragment} from 'react';
import ParticipantsItem from "../participantsItem/ParticipantsItem";
import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const ParticipantsList = () => {
  const participants = useSelector(state => state.participants.participants);

  return (
    <Fragment>
      {
        participants.length
          ?
          <Box className="participants">
            {participants.map((participant, index) => <ParticipantsItem participant={participant} key={index}/>)}
          </Box>
          :
          <Typography component="p" variant="h6">Participant list is empty😞</Typography>
      }
    </Fragment>
  );
};

export default ParticipantsList;
