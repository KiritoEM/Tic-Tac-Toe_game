import BoardSquare from "./BoardSquare";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Board from "../helper/Board";
import checkWinner from "../helper/checkWinner";

export type Player = 1 | 2 | 0;

const BoardBody = (): JSX.Element => {
  const { CalculateWinner } = checkWinner();
  const { getCurrentPlayer } = useCurrentUser();
  const { board, setBoard } = Board();

  const handleSquareClick = (row: number, col: number) => {
    //add shallow copy of board matrix
    const newBoard = [...board];

    if (newBoard[row][col] !== 1 && newBoard[row][col] !== 2) {
      newBoard[row][col] = getCurrentPlayer();
      setBoard(newBoard);
    }
  };

  const winner = CalculateWinner(board.flat());

  if (winner) {
    console.log("winner : ", winner);
  }

  return (
    <section id="board__body">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={`section-${rowIndex + 1}`}>
          {row.map((value, colIndex) => (
            <BoardSquare
              key={colIndex}
              currentPlayer={value}
              squareClick={() => handleSquareClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default BoardBody;
