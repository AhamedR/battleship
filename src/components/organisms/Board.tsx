import React, { useMemo } from "react";
import Grid from "@mui/material/Grid";

import Cell from "../atoms/Cell";
import useGameLogic from "../../hooks/useGameLogic";
import SquareSkeleton from "../molecules/SquareSkeleton";

const Board: React.FC = () => {
  const { isWon, board, isLoading, handleBoardClick } = useGameLogic();

  const cells = useMemo(
    () =>
      board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isActive={!isWon}
            value={cell}
            onClick={() => handleBoardClick(rowIndex, colIndex)}
          />
        ))
      ),
    [board, isWon, handleBoardClick]
  );

  return (
    <Grid container>
      {isLoading ? (
        <SquareSkeleton />
      ) : (
        <Grid
          item
          display={"grid"}
          gridTemplateColumns={"repeat(10, 1fr)"}
          gridTemplateRows={"repeat(10, 1fr)"}
          border={"5px solid #FFB300"}
        >
          {cells}
        </Grid>
      )}
    </Grid>
  );
};

export default Board;
