import React, {useState} from 'react';
import {useGameStore} from '../../context/gameContext';
import {changePlayerName} from '../../actions';
import './NamePlayers.scss';
import {Button, TextField} from "@mui/material";

function NamePlayers() {
  const [playerNames, setPlayerNames] = useState({
    player1: '',
    player2: '',
    isShow: true,
  });
  const [state, dispatch] = useGameStore();

  const handlePlayersName = (event) => {
    setPlayerNames({
      ...playerNames,
      [event.target.name]: event.target.value,
    });
  };

  const enterNames = (event) => {
    event.preventDefault();
    if (!(playerNames.player1 && playerNames.player2)) {
      return;
    }
    dispatch(changePlayerName(playerNames));
  };

  return (
    <div>
      <form>
        <TextField
          fullWidth
          sx={{marginBottom: '15px'}}
          size="small"
          className="inp-name"
          type="text"
          name="player1"
          value={playerNames.player1}
          onChange={handlePlayersName}
          label="Name for player X"
          disabled={state.history.length >= 2}
        />
        <TextField
          fullWidth
          sx={{marginBottom: '15px'}}
          size="small"
          className="inp-name"
          type="text"
          name="player2"
          value={playerNames.player2}
          onChange={handlePlayersName}
          label="Name for player 0"
          disabled={state.history.length >= 2}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={(event) => enterNames(event)}
          disabled={state.history.length >= 2}
          className="namePlayers-btn"
        >
          Enter names
        </Button>
      </form>
    </div>
  );
}

export default NamePlayers;
