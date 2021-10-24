import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Stopwatch from "../../stopwatch/Stopwatch";
import {closeModalAction} from "../../../actions/modalActions";
import {addParticipantAction} from "../../../actions/participantsActions";
import {resetStopwatchAction} from "../../../actions/stopwatchActions";

const CurrentParticipant = ({stateButtons, setStateButtons, initialState}) => {
  const dispatch = useDispatch();
  const time = useSelector(state => state.stopwatch.time);
  const currentParticipant = useSelector(state => state.participants.currentParticipant);
  const intervalId = useSelector(state => state.stopwatch.intervalId);

  const cancelRegistration = () => {
    setStateButtons(initialState);
    clearInterval(intervalId);
    dispatch(closeModalAction());
    dispatch(resetStopwatchAction());
  };

  const saveRegistration = () => {
    setStateButtons(initialState);
    const participant = {
      ...currentParticipant,
      time: time
    };
    dispatch(addParticipantAction(participant));
    clearInterval(intervalId);
    dispatch(closeModalAction());
    dispatch(resetStopwatchAction());
  };

  return (
    <Box>
      <Typography component="p" variant="h4">Participant</Typography>
      <Typography component="p">
        ID: <span style={{fontWeight: 'bold'}}>{currentParticipant.id}</span>
      </Typography>
      <Typography component="p">
        First name: <span style={{fontWeight: 'bold'}}>{currentParticipant.firstName}</span>
      </Typography>
      <Typography component="p">
        Second name: <span style={{fontWeight: 'bold'}}>{currentParticipant.secondName}</span>
      </Typography>
      <Stopwatch stateButtons={stateButtons} setStateButtons={setStateButtons}/>
      <Box sx={{display: 'flex', columnGap: '10px', justifyContent: 'center'}}>
        <Button
          color="error"
          variant="contained"
          onClick={cancelRegistration}
          disabled={stateButtons.cancel ? false : true}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={saveRegistration}
          disabled={stateButtons.save ? false : true}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default CurrentParticipant;
