import React, { createContext, useState, ReactNode } from "react";

// Assets
import CarrierImg from "../assets/carrier.png";
import BattleshipImg from "../assets/battleship.png";
import CruiserImg from "../assets/cruiser.png";
import SubmarineImg from "../assets/submarine.png";
import DestroyerImg from "../assets/destroyer.png";

interface ShipLayout {
  positions: [number, number][];
  size: number;
  img: string;
  hits: boolean[];
}

interface Ships {
  [key: string]: ShipLayout;
}

export interface GameContextType {
  board: string[][];
  handleClick: (row: number, col: number) => void;
  ships: Ships;
}

const initialBoard: string[][] = Array(10)
  .fill(null)
  .map(() => Array(10).fill(""));
const shipLayout: Ships = {
  carrier: {
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
    img: CarrierImg,
    get size(): number {
      return this.positions.length;
    },
    hits: [false, false, false, false, false],
  },
  battleship: {
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
    img: BattleshipImg,
    get size(): number {
      return this.positions.length;
    },
    hits: [false, false, false, false],
  },
  cruiser: {
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
    img: CruiserImg,
    get size(): number {
      return this.positions.length;
    },
    hits: [false, false, false],
  },
  submarine: {
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
    img: SubmarineImg,
    get size(): number {
      return this.positions.length;
    },
    hits: [false, false, false],
  },
  destroyer: {
    positions: [
      [0, 0],
      [1, 0],
    ],
    img: DestroyerImg,
    hits: [false, false],
    get size(): number {
      return this.positions.length;
    },
  },
};

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [board, setBoard] = useState<string[][]>(initialBoard);
  const [ships, setShips] = useState<Ships>(shipLayout);

  const handleClick = (row: number, col: number) => {
    const newBoard = [...board];
    const newShipLayout = { ...ships };
    let hit = false;

    Object.keys(ships).forEach((ship) => {
      ships[ship].positions.forEach((pos, index) => {
        if (pos[0] === row && pos[1] === col) {
          newShipLayout[ship].hits[index] = true;
          hit = true;
        }
      });
    });

    newBoard[row][col] = hit ? "hit" : "miss";
    setBoard(newBoard);
    setShips(newShipLayout);
  };

  return (
    <GameContext.Provider value={{ board, handleClick, ships }}>
      {children}
    </GameContext.Provider>
  );
};
