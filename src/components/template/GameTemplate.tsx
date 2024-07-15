import React from "react";
import GameInfo from "../organisms/GameInfo";
import { Container, Grid } from "@mui/material";

const GameTemplate: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        sx={{flexDirection: { md: 'row', xs: 'column-reverse' }}}
      >
        <Grid item xs={12} md={6}>
          <GameInfo />
        </Grid>
        <Grid item xs={12} md={6}>
          Game board
        </Grid>
      </Grid>
    </Container>
  );
};

export default GameTemplate;
