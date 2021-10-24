import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteParticipantAction} from "../../../actions/participantsActions";
import {msToTime} from "../../../scripts";

const ParticipantsItem = ({participant}) => {
  const dispatch = useDispatch();

  const deleteParticipant = (participant) => {
    dispatch(deleteParticipantAction(participant.id));
  }

  return (
    <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <CardContent>
        <Typography component="p">
          ID: <span style={{fontWeight: 'bold'}}>{participant.id}</span>
        </Typography>
        <Typography component="p">
          First name: <span style={{fontWeight: 'bold'}}>{participant.firstName}</span>
        </Typography>
        <Typography component="p">
          Second name: <span style={{fontWeight: 'bold'}}>{participant.secondName}</span>
        </Typography>
        <Typography component="p">
          Time: <span style={{fontWeight: 'bold'}}>{msToTime(participant.time)}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteParticipant(participant)} fullWidth variant="contained" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ParticipantsItem;
