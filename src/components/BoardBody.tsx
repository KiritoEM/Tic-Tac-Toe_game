import { useState } from "react";
import BoardSquare from "./BoardSquare";

type Player = 1 | 2 | null;

const BoardBody = (): JSX.Element => {
  const defaultBoard: Player[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [board, setBoard] = useState<Player[][]>(defaultBoard);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);

  const getCurrentPlayer = (): number => {
    currentPlayer===1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
    return currentPlayer;
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
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default BoardBody;
