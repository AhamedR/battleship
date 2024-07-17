import Grid from "@mui/material/Grid";

import Cell from "../atoms/Cell";
import useGameLogic from "../../hooks/useGameLogic";

const Board: React.FC = () => {
  const { board, handleClick } = useGameLogic();

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
              value={cell}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default Board;
