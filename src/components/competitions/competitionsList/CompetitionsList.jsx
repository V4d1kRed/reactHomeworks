import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
import {Box, Typography} from "@mui/material";
import CompetitionsItem from "../competitionsItem/CompetitionsItem";

const CompetitionsList = () => {
  const {searchCompetitions} = useSelector(state => state.competitions);

  return (
    <Fragment>
      {
        searchCompetitions.length
          ?
          <Box className="competitions__list">
            {searchCompetitions.map((competition, index) => <CompetitionsItem competition={competition} key={index}/>)}
          </Box>
          :
          <Typography component="p" variant="h6">Competitions list is empty😞</Typography>
      }
    </Fragment>
  );
};

export default CompetitionsList;
