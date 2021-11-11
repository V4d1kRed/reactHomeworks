import React, {Fragment} from 'react';
import {
  addWinner,
  changeStatusGame,
  showResultGame,
} from '../../actions';
import {useGameStore} from '../../context/gameContext';
import {getSignTurn} from '../../utils/getSignTurn';
import {bindNameSign} from '../../utils/BindNameSign';
import './GiveUpButton.scss';
import {Button} from "@mui/material";

function GiveUpButton() {
  const [state, dispatch] = useGameStore();

  const winner = bindNameSign(
    getSignTurn(state.history.length, !state.isXTurn),
    state.players.player1,
    state.players.player2,
  );
  const giveUpPlayer = () => {
    dispatch(changeStatusGame());
    dispatch(addWinner(winner));
    dispatch(showResultGame(winner));
  };

  return (
    <Fragment>
      <Button
        fullWidth
        color="error"
        variant="contained"
        className="btnGiveUp"
        onClick={() => giveUpPlayer()}
        disabled={!state.isGameFinish ? false : true}
      >
        I give up!
      </Button>
    </Fragment>
  );
}

export default GiveUpButton;
