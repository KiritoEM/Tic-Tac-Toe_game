import { Player } from "./BoardBody";
import Board from "../helper/Board";

interface Iaction {
  squareClick: () => void;
  currentPlayer: number | null;
}

const BoardSquare = ({
  currentPlayer,
  squareClick,
}: Iaction): JSX.Element => {
  const { getSquare } = Board();
  return (
    <div
      className="board-square"
      onClick={() => {
        squareClick();
      }}
    >
      <div>
        <img src={getSquare(currentPlayer as Player)} alt="" />
      </div>
    </div>
  );
};

export default BoardSquare;
