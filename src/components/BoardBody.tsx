import { useState } from "react";
import BoardSquare from "./BoardSquare";
import CurrentUser from "../helper/CurrentUser";

export type Player = 1 | 2 | 0;

const BoardBody = (): JSX.Element => {
  const { getCurrentPlayer } = CurrentUser();

  const defaultBoard: Player[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [board, setBoard] = useState<Player[][]>(defaultBoard);

  if (board) {
    console.log("board: ", board);
  }

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
