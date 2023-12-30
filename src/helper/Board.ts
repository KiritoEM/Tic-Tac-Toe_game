import { useState } from "react";
import { Player } from "../components/BoardBody";

export default function Board() {
  const defaultBoard: Player[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [board, setBoard] = useState<Player[][]>(defaultBoard);

  const getSquare = (player: Player): string => {
    switch (player) {
      case 1:
        return "/croix.png";
      case 2:
        return "/circle.png";
      default:
        return "";
    }
  };

  const squareTurn = (player: Player): string => {
    switch (player) {
      case 1:
        return "/turn-croix.png";
      case 2:
        return "/turn-rond.png";
      default:
        return "";
    }
  };

  return { board, setBoard, getSquare, squareTurn };
}
