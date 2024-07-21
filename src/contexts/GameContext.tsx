import React, { createContext, useState, ReactNode, useCallback } from "react";

// Assets
import CarrierImg from "../assets/carrier.png";
import BattleshipImg from "../assets/battleship.png";
import CruiserImg from "../assets/cruiser.png";
import SubmarineImg from "../assets/submarine.png";
import DestroyerImg from "../assets/destroyer.png";

// Types
interface ShipLayout {
  positions: [number, number][];
  size: number;
}

interface ShipDetail extends ShipLayout {
  hits: boolean[];
  img: string;
}

interface Ships {
  [key: string]: ShipDetail;
}

interface PlayerDetail {
  name: string;
  score: number;
}

export interface GameContextType {
  board: string[][];
  handleBoardClick: (row: number, col: number) => void;
  ships: Ships;
  user: PlayerDetail;
  opponent: PlayerDetail;
  isWon: boolean;
  showHitLocations: boolean;
  toggleHitLocations: () => void;
  restartGame: () => void;
}

// Initial Values
const initialBoard: string[][] = Array(10)
  .fill(null)
  .map(() => Array(10).fill(""));

const initialShips: Ships = {
  carrier: {
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
    img: CarrierImg,
    size: 5,
    hits: Array(5).fill(false),
  },
  battleship: {
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
    img: BattleshipImg,
    size: 4,
    hits: Array(4).fill(false),
  },
  cruiser: {
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
    img: CruiserImg,
    size: 3,
    hits: Array(3).fill(false),
  },
  submarine: {
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
    img: SubmarineImg,
    size: 3,
    hits: Array(3).fill(false),
  },
  destroyer: {
    positions: [
      [0, 0],
      [1, 0],
    ],
    img: DestroyerImg,
    size: 2,
    hits: Array(2).fill(false),
  },
};

const initialUser: PlayerDetail = {
  name: "Player 1",
  score: 0,
};

const initialOpponent: PlayerDetail = {
  name: "Player 2",
  score: 0,
};

const calculateTotalShipCells = (ships: Ships): number =>
  Object.values(ships).reduce((acc, ship) => acc + ship.size, 0);

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [board, setBoard] = useState<string[][]>([
    ...initialBoard.map((row) => [...row]),
  ]);
  const [ships, setShips] = useState<Ships>(
    JSON.parse(JSON.stringify(initialShips))
  );
  const [user, setUser] = useState<PlayerDetail>({ ...initialUser });
  const [showHitLocations, setShowHitLocations] = useState(false);
  const [totalShipCells, setTotalShipCells] = useState(() =>
    calculateTotalShipCells(initialShips)
  );

  const handleBoardClick = useCallback(
    (row: number, col: number) => {
      // Early return if the cell is already clicked
      if (board[row][col] === "hit" || board[row][col] === "miss") {
        return;
      }

      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        let hit = false;

        setShips((prevShips) => {
          const newShipLayout = { ...prevShips };

          Object.keys(prevShips).forEach((ship) => {
            prevShips[ship].positions.forEach((pos, index) => {
              if (pos[0] === row && pos[1] === col) {
                newShipLayout[ship].hits[index] = true;
                newShipLayout[ship].size -= 1;
                hit = true;
              }
            });
          });

          return newShipLayout;
        });

        if (hit) {
          setTotalShipCells((prevTotal) => prevTotal - 1);
          if (totalShipCells === 1) {
            setUser((prevUser) => ({ ...prevUser, score: prevUser.score + 1 }));
          }
        }

        newBoard[row][col] = hit ? "hit" : "miss";
        return newBoard;
      });
    },
    [board, totalShipCells]
  );

  const toggleHitLocations = () => setShowHitLocations((prev) => !prev);

  const restartGame = () => {
    setBoard([...initialBoard.map((row) => [...row])]);
    setShips(JSON.parse(JSON.stringify(initialShips)));
    setTotalShipCells(calculateTotalShipCells(initialShips));
  };

  const isWon = totalShipCells === 0;

  return (
    <GameContext.Provider
      value={{
        board,
        handleBoardClick,
        ships,
        user,
        opponent: initialOpponent,
        isWon,
        showHitLocations,
        toggleHitLocations,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
