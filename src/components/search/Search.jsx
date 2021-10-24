import React from 'react';
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {searchParticipantsByNameAndIdAction, setSearchValueAction} from "../../actions/participantsActions";

const Search = () => {
  const dispatch = useDispatch();
  const {participants, searchParticipants} = useSelector(state => state.participants);

  const searchParticipantByNameAndId = (event) => {
    dispatch(setSearchValueAction(event.target.value));
    dispatch(searchParticipantsByNameAndIdAction());
    console.log('CHANGE');
    console.log(participants);
    console.log(searchParticipants);
  };

  return (
    <TextField
      fullWidth
      size="small"
      type="search"
      sx={{backgroundColor: 'white'}}
      label="Enter participant name..."
      onChange={searchParticipantByNameAndId}
    />
  );
};

export default Search;
