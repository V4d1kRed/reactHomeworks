import React, {Fragment} from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const CompetitionsItem = ({competition}) => {
  const history = useHistory();
  const {participants} = useSelector(state => state.participants);

  const winningParticipant = participants.filter(item => {
    return item.competitionId === competition.id
  }).sort((a, b) => a.time - b.time)[0];

  const handleClick = () => {
    history.push(`/competition/${competition.id}`);
  };

  return (
    <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <CardContent>
        <Typography component="p">
          ID: <span style={{fontWeight: 'bold'}}>{competition.id}</span>
        </Typography>
        <Typography component="p">
          Name: <span style={{fontWeight: 'bold'}}>{competition.name}</span>
        </Typography>
        <Typography component="p">
          Status: <span style={{fontWeight: 'bold'}}>{competition.status ? 'finished' : 'active'}</span>
        </Typography>
        {
          competition.status && winningParticipant
            ? <Typography component="p">
              Winner: <span style={{fontWeight: 'bold'}}>{winningParticipant.firstName} {winningParticipant.secondName}</span>
            </Typography>
            :
            <Fragment></Fragment>
        }
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="success" onClick={handleClick}>
          Show
        </Button>
      </CardActions>
    </Card>
  );
};

export default CompetitionsItem;
