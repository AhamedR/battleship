import Grid from "@mui/material/Grid";

import ScoreBoard from "../molecules/ScoreBoard";
import ShipList from "../molecules/ShipList";
import useGameLogic from "../../hooks/useGameLogic";

const GameInfo: React.FC = () => {
  const { user, opponent } = useGameLogic();

  return (
    <Grid container sx={{ flexDirection: { md: "row", sm: "row" } }}>
      <Grid container item md={12} xs={12} sm={4} mb={2}>
        <ScoreBoard name={user.name} score={user.score} color="#FFB300" />
        <ScoreBoard name={opponent.name} score={opponent.score} color="#00ACC1" />
      </Grid>
      <Grid container item md={12} xs={12} sm={8} pl={{ sm: 2 }}>
        <ShipList />
      </Grid>
    </Grid>
  );
};

export default GameInfo;
