import Board from "../helper/Board";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Player } from "./BoardBody";

// interface Iturn{
//   getPlayer: () => number;
// }

const BoardHeader = (): JSX.Element => {
  const { currentPlayer } = useCurrentUser();

  if (currentPlayer) {
    console.log("player: ", currentPlayer);
  }
  const { getSquare } = Board();

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
      <div className="restart-game">
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
