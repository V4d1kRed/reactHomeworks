import React, {Fragment} from 'react';
import ParticipantsItem from "../participantsItem/ParticipantsItem";
import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const ParticipantsList = () => {
  const {searchParticipants} = useSelector(state => state.participants);

  return (
    <Fragment>
      {
        searchParticipants.length
          ?
          <Box className="participants">
            {searchParticipants.map((participant, index) => <ParticipantsItem participant={participant} key={index}/>)}
          </Box>
          :
          <Typography component="p" variant="h6">Participant list is empty😞</Typography>
      }
    </Fragment>
  );
};

export default ParticipantsList;
