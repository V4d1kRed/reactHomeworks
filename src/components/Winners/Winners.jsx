import React, {Fragment} from 'react';
import { useGameStore } from '../../context/gameContext';

function Winners() {
	const [state] = useGameStore();

	return (
		<Fragment>
      <p>Winner: <strong>{state.resultGame}</strong></p>
		</Fragment>
	);
}

export default Winners;
