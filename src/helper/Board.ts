import { useState } from "react";
import { Player } from "../components/BoardBody";

export default function Board() {
  const defaultBoard: Player[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [board, setBoard] = useState<Player[][]>(defaultBoard);

  if (board) {
    console.log("board: ", board);
  }

  return { board, setBoard };
}
