interface Iaction {
  getPlayer: () => number;
  value: number | null;
}

const BoardSquare = ({ value, getPlayer }: Iaction): JSX.Element => {
  return (
    <div
      className="board-square"
      onClick={() => {
        console.log("value: ", value);
        console.log("current-player : ", getPlayer());
      }}
    ></div>
  );
};

export default BoardSquare;
