import BoardSquare from "./BoardSquare";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Board from "../helper/Board";

export type Player = 1 | 2 | 0;

const BoardBody = (): JSX.Element => {
  const { getCurrentPlayer } = useCurrentUser();
  const { board, setBoard } = Board();

  const handleSquareClick = (row: number, col: number) => {
    //add shallow copy of board matrix
    const newBoard = [...board];
    newBoard[row][col] = getCurrentPlayer();
    setBoard(newBoard);
  };

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
