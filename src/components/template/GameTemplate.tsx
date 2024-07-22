import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import GameInfo from "../organisms/GameInfo";
import Board from "../organisms/Board";
import WinNotification from "../molecules/WinNotification";

const GameTemplate: React.FC = () => {
  return (
    <Container maxWidth="md">
      <WinNotification />
      <Grid
        container
        sx={{ flexDirection: { md: "row", xs: "column-reverse" } }}
        spacing={{ xs: 0, md: 1 }}
        pt={4}
        pb={4}
      >
        <Grid item xs={12} md={5} pt={{ xs: 0, sm: 2 }}>
          <GameInfo />
        </Grid>
        <Grid item xs={12} md={7}>
          <Board />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GameTemplate;
