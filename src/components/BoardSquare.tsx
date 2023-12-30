import { Player } from "./BoardBody";

interface Iaction {
  getPlayer: () => number;
  squareClick: () => void;
  value: number | null;
}

const BoardSquare = ({
  value,
  getPlayer,
  squareClick,
}: Iaction): JSX.Element => {
  const getImageSource = (player: Player): string => {
    switch (player) {
      case 1:
        return "/croix.png";
      case 2:
        return "/circle.png";
      default:
        return "";
    }
  };
  return (
    <div
      className="board-square"
      onClick={() => {
        console.log("value: ", value);
        console.log("current-player : ", getPlayer());
        squareClick();
      }}
    >
      <div>
        <img src={getImageSource(value as Player)} alt="" />
      </div>
    </div>
  );
};

export default BoardSquare;
