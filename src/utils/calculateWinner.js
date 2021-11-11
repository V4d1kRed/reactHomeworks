import { winnerLines } from '../constants';

export function calculateWinner(squares, players) {
	const winnerLine = winnerLines.find(
		([a, b, c]) =>
			squares[a] &&
			squares[a] === squares[b] &&
			squares[b] === squares[c],
	);

	if (winnerLine) {
		if (squares[winnerLine[0]] === 'X') {
			return players.player1 || 'Player1';
		} else {
			return players.player2 || 'Player2';
		}
	}

	if (squares.every(Boolean)) {
		return 'Draw';
	}
	return null;
}
