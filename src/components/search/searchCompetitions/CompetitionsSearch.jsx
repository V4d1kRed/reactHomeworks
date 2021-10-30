import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {
  setSearchValueAction,
  searchCompetitionsByNameAndIdAction
} from "../../../store/actions/competitionsActions";
import {useHistory} from "react-router-dom";

const CompetitionsSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const searchCompetitionsByNameAndId = (event) => {
    dispatch(setSearchValueAction(event.target.value));
    dispatch(searchCompetitionsByNameAndIdAction());
  };

  const handleClick = () => {
    history.push('/create');
  };

  return (
    <Box className="competitions__container">
      <TextField
        fullWidth
        size="small"
        type="search"
        sx={{backgroundColor: 'aliceblue', '& input': {background: 'white'}}}
        label="Enter competitions name..."
        onChange={searchCompetitionsByNameAndId}
      />
      <Button onClick={handleClick} fullWidth variant="contained" color="secondary">
        Add competition
      </Button>
    </Box>
  );
};

export default CompetitionsSearch;
