import React from 'react';
import {Box, Typography} from "@mui/material";
import {msToTime} from "../../../scripts";

const WinnerCompetition = ({name, winningParticipant}) => {

  return (
    <Box style={{marginBottom: '15px'}}>
      <Typography component="p">
        ID: <span style={{fontWeight: 'bold'}}>{winningParticipant.id}</span>
      </Typography>
      <Typography component="p">
        Name: <span style={{fontWeight: 'bold'}}>{name}</span>
      </Typography>
      <Typography component="p">
        Winner: <span style={{fontWeight: 'bold'}}>
                  {winningParticipant.firstName} {winningParticipant.secondName}
                </span>
      </Typography>
      <Typography component="p">
        Time: <span style={{fontWeight: 'bold'}}>{msToTime(winningParticipant.time)}</span>
      </Typography>
    </Box>
  );
};

export default WinnerCompetition;
