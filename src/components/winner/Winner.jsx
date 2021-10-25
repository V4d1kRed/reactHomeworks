import React, {Fragment, useEffect, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setAmountParticipantsAction, setWinningParticipantAction} from "../../actions/participantsActions";
import {msToTime} from "../../scripts";

const Winner = () => {
  const [showWinningParticipant, setShowWinningParticipant] = useState(false);
  const dispatch = useDispatch();
  const {participants, amountParticipants, winningParticipant} = useSelector(state => state.participants);

  useEffect(() => {
    dispatch(setAmountParticipantsAction());
    dispatch(setWinningParticipantAction());
  }, [dispatch, participants]);

  const showWinner = () => {
    setShowWinningParticipant(true);
  };

  return (
    <Box className="winner">
      {
        showWinningParticipant && amountParticipants
          ?
          <Fragment>
            <h2>The winner</h2>
            <Typography component="p">
              ID: <span style={{fontWeight: 'bold'}}>{winningParticipant.id}</span>
            </Typography>
            <Typography component="p">
              First name: <span style={{fontWeight: 'bold'}}>{winningParticipant.firstName}</span>
            </Typography>
            <Typography component="p">
              Second name: <span style={{fontWeight: 'bold'}}>{winningParticipant.secondName}</span>
            </Typography>
            <Typography component="p">
              Time: <span style={{fontWeight: 'bold'}}>{msToTime(winningParticipant.time)}</span>
            </Typography>
          </Fragment>
          :
          <Fragment>
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
          </Fragment>
      }
    </Box>
  );
};

export default Winner;
