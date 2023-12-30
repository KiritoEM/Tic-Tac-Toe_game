import { ReactNode, createContext, useContext, useState } from "react";
import { Player } from "../components/BoardBody";

interface Ichildren {
  children: ReactNode;
}

interface IContext {
  currentPlayer: Player;
  getCurrentPlayer: () => Player;
}

const CurrentUserContext = createContext<IContext | null>(null);

// Créez le fournisseur qui englobe votre application
export const CurrentUserProvider = ({ children }: Ichildren) => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1);

  const getCurrentPlayer = (): Player => {
    const newPlayer = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayer(newPlayer);
    return currentPlayer as Player;
  };

  return (
    <CurrentUserContext.Provider value={{ currentPlayer, getCurrentPlayer }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentUser = (): IContext => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useContenxt must be used within an AppProvider");
  }
  return context;
};
