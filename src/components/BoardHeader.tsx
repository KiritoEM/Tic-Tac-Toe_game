import Board from "../helper/Board";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Player } from "./BoardBody";

const BoardHeader = (): JSX.Element => {
  const { currentPlayer } = useCurrentUser();
  const { setBoard } = Board();
  const { getSquare } = Board();

  const clearBoard = () => {
    const newEmptyBoard: Player[][] = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    setBoard(newEmptyBoard);

    window.location.reload();
  };

  return (
    <section id="board__header">
      <div className="icons">
        <img src="/pion.png" alt="" />
      </div>
      <div className="turn">
        <div className="turn__content">
          <div className="img">
            <img src={getSquare(currentPlayer as Player)} alt="" />
          </div>
          <div className="label">
            <p>TOUR</p>
          </div>
        </div>
      </div>
      <div className="restart-game" onClick={clearBoard}>
        <div className="restart-game__content">
          <div className="img">
            <img src="/restart.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardHeader;
