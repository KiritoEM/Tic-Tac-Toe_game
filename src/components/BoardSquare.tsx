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
  return (
    <div
      className="board-square"
      onClick={() => {
        console.log("value: ", value);
        console.log("current-player : ", getPlayer());
        squareClick();
      }}
    ></div>
  );
};

export default BoardSquare;
