import React from 'react';
import {useGameStore} from '../../context/gameContext';
import {backToCurrentStep} from '../../actions';
import {getSignTurn} from '../../utils/getSignTurn';
import './History.scss';
import {bindNameSign} from '../../utils/BindNameSign';
import {Button} from "@mui/material";

function History() {
  const [state, dispatch] = useGameStore();

  const moveToStep = (i) => {
    dispatch(backToCurrentStep(state.history.slice(0, i)));
  };

  return (
    <div>
      <p>
        Next step:{' '}
        <strong>
          {bindNameSign(
            getSignTurn(state.history.length, state.isXTurn),
            state.players.player1,
            state.players.player2,
          )}
        </strong>
      </p>
      <h2>History</h2>
      <div>
        {state.history.map((currentStep, i) => (
          <Button
            sx={{margin: '5px 0'}}
            fullWidth
            color="error"
            variant="contained"
            className="btnHistory"
            key={i}
            onClick={() => moveToStep(i)}
            style={{display: i === 0 && 'none'}}
          >
            Step {i}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default History;
