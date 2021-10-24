import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {msToTime} from "../../scripts";
import {resetStopwatchAction, setIntervalIdAction, startStopwatchAction} from "../../actions/stopwatchActions";

const Stopwatch = ({stateButtons, setStateButtons}) => {
  const dispatch = useDispatch();
  const time = useSelector(state => state.stopwatch.time);
  const intervalId = useSelector(state => state.stopwatch.intervalId);

  const updateStopwatch = () => {
    let timeStopwatch = time;
    const currentIntervalId = setInterval(() => {
      timeStopwatch += 10;
      dispatch(startStopwatchAction(timeStopwatch));
      return () => clearInterval(currentIntervalId);
    }, 10);
    dispatch(setIntervalIdAction(currentIntervalId));
  };

  const startStopwatch = () => {
    setStateButtons(prev => ({...prev, start: false, stop: true}));
    clearInterval(intervalId);
    updateStopwatch();
  };

  const stopStopwatch = () => {
    setStateButtons(prev => ({...prev, stop: false, reset: true, save: true}));
    clearInterval(intervalId);
  };

  const resetStopwatch = () => {
    setStateButtons(prev => ({...prev, reset: false, save: false, start: true}));
    clearInterval(intervalId);
    dispatch(resetStopwatchAction());
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '5px', marginBottom: '10px'}}>
      <Typography component="p" variant="h5" sx={{textAlign: 'center'}}>
        {msToTime(time)}
      </Typography>
      <Box sx={{display: 'flex', columnGap: '10px', justifyContent: 'center'}}>
        <Button
          variant="contained"
          sx={{backgroundColor: '#4CB560', '&:hover': {backgroundColor: '#4CB560'}}}
          onClick={startStopwatch}
          disabled={stateButtons.start ? false : true}
        >
          Start
        </Button>
        <Button
          variant="contained"
          sx={{backgroundColor: '#E15353', '&:hover': {backgroundColor: '#E15353'}}}
          onClick={stopStopwatch}
          disabled={stateButtons.stop ? false : true}
        >
          Stop
        </Button>
        <Button
          variant="contained"
          sx={{backgroundColor: '#F6AD58', '&:hover': {backgroundColor: '#F6AD58'}}}
          onClick={resetStopwatch}
          disabled={stateButtons.reset ? false : true}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Stopwatch;
