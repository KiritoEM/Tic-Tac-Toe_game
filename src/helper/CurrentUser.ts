import { useState } from "react";
import { Player } from "../components/BoardBody";

export default function CurrentUser() {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);

  const getCurrentPlayer = (): Player => {
    currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
    return currentPlayer as Player;
  };

  return { getCurrentPlayer };
}
