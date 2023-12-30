import BoardSquare from "./BoardSquare";
import CurrentUser from "../helper/CurrentUser";
import Board from "../helper/Board";

export type Player = 1 | 2 | 0;

const BoardBody = (): JSX.Element => {
  const { getCurrentPlayer } = CurrentUser();
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
              value={value}
              getPlayer={getCurrentPlayer}
              squareClick={() => handleSquareClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default BoardBody;
