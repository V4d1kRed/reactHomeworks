import React from 'react';
import {Box, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {setStatusAction} from "../../store/actions/competitionsActions";

const Winner = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {competitionId} = useParams();
  const {participants} = useSelector(state => state.participants);

  const amountParticipants = participants.filter(participant => participant.competitionId === +competitionId).length;

  const showWinner = () => {
    history.goBack();
    dispatch(setStatusAction(+competitionId));
  };

  return (
    <Box className="winner">
      <h2 className="winner__title">Total participants: {amountParticipants}</h2>
      <Button
        fullWidth
        color="success"
        variant="contained"
        disabled={amountParticipants ? false : true}
        onClick={showWinner}
      >
        Show winner
      </Button>
    </Box>
  );
};

export default Winner;
