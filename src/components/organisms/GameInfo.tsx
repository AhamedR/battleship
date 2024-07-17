import Grid from "@mui/material/Grid";
import ScoreBoard from "../molecules/ScoreBoard";
import ShipList from "../molecules/ShipList";

const GameInfo: React.FC = () => {
  return (
    <>
      <Grid container spacing={2}>
        <ScoreBoard name="Player 1" score={1} />
        <ScoreBoard name="Player 2" score={0} color="#00ACC1" />
      </Grid>
      <ShipList />
    </>
  );
};

export default GameInfo;
