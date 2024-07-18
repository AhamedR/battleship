import Grid from "@mui/material/Grid";

import ScoreBoard from "../molecules/ScoreBoard";
import ShipList from "../molecules/ShipList";

const GameInfo: React.FC = () => {
  return (
    <Grid container sx={{ flexDirection: { md: "row", sm: "row" } }}>
      <Grid container item md={12} xs={12} sm={4} mb={2}>
        <ScoreBoard name="Player 1" score={1} />
        <ScoreBoard name="Player 2" score={0} color="#00ACC1" />
      </Grid>
      <Grid container item md={12} xs={12} sm={8} pl={{ sm: 2 }}>
        <ShipList />
      </Grid>
    </Grid>
  );
};

export default GameInfo;
