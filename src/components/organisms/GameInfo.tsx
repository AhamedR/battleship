import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ScoreBoard from "../molecules/ScoreBoard";
import ShipList from "../molecules/ShipList";

const GameInfo: React.FC = () => {
  return (
    <Box>
      <Grid container>
        <ScoreBoard name="Player 1" score={1} />
        <ScoreBoard name="Player 2" score={0} color="#00ACC1" />
      </Grid>
      <Grid container spacing={1} mt={2}>
        <ShipList />
      </Grid>
    </Box>
  );
};

export default GameInfo;
