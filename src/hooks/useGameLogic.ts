const DUMMY = {
  board: [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ],
  ships: {
    carrier: {
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
      img: "/src/assets/carrier.png",
      size: 5,
      hits: [false, false, false, false, false],
    },
    battleship: {
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
      img: "/src/assets/battleship.png",
      size: 4,
      hits: [false, false, false, false],
    },
    cruiser: {
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
      img: "/src/assets/cruiser.png",
      size: 3,
      hits: [false, false, false],
    },
    submarine: {
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
      img: "/src/assets/submarine.png",
      size: 3,
      hits: [false, false, false],
    },
    destroyer: {
      positions: [
        [0, 0],
        [1, 0],
      ],
      img: "/src/assets/destroyer.png",
      hits: [false, false],
      size: 2,
    },
  },
};

const useGameLogic = () => {
  const context = DUMMY
  const handelClick = (rowIndex: number, colIndex: number) => {}

  return {...context, handelClick};
};

export default useGameLogic;
