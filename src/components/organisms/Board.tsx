import Grid from "@mui/material/Grid";

import Cell from "../atoms/Cell";
import useGameLogic from "../../hooks/useGameLogic";

const Board: React.FC = () => {
  const { isWon, board, handleBoardClick } = useGameLogic();
  return (
    <Grid container>
      <Grid
        item
        display={"grid"}
        gridTemplateColumns={"repeat(10, 1fr)"}
        gridTemplateRows={"repeat(10, 1fr)"}
        border={"5px solid #FFB300"}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isActive={!isWon}
              value={cell}
              onClick={() => handleBoardClick(rowIndex, colIndex)}
            />
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default Board;
