import React, {useEffect} from 'react';
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {searchParticipantsByNameAndIdAction, setSearchValueAction} from "../../actions/participantsActions";

const Search = () => {
  const dispatch = useDispatch();
  const participants = useSelector(state => state.participants.participants);

  useEffect(() => {
    dispatch(searchParticipantsByNameAndIdAction());
  }, [participants, dispatch]);

  const searchParticipantByNameAndId = (event) => {
    dispatch(setSearchValueAction(event.target.value));
    dispatch(searchParticipantsByNameAndIdAction());
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
