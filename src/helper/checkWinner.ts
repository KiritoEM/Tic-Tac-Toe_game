import { Player } from "../components/BoardBody";

interface WinnerResult {
  winner: Player | null;
  winningSquares: number[] | null;
}

export default function checkWinner() {
  const CalculateWinner = (squares: Player[]): WinnerResult => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    //verification du combo
    for (const line of combos) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], winningSquares: line };
      }
    }

    return { winner: null, winningSquares: null };
  };

  return { CalculateWinner };
}
