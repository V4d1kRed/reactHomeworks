import React, {Fragment} from 'react';
import ParticipantsItem from "../participantsItem/ParticipantsItem";
import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const ParticipantsList = () => {
  const {competitionId} = useParams();
  const {searchParticipants} = useSelector(state => state.participants);

  const competitionParticipants = searchParticipants.filter(a => a.competitionId === +competitionId);

  return (
    <Fragment>
      {
        competitionParticipants.length
          ?
          <Box className="participants">
            {
              competitionParticipants.map((participant, index) => {
                return <ParticipantsItem participant={participant} key={index}/>
              })
            }
          </Box>
          :
          <Typography component="p" variant="h6">Participants list is empty😞</Typography>
      }
    </Fragment>
  );
};

export default ParticipantsList;
