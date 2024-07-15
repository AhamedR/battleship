import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const GameInfo: React.FC = () => {
  return (
    <Grid container>
      <Grid container justifyContent={"space-between"}>
        <Grid
          container
          md={6}
          direction={"column"}
          textAlign={"center"}
          width={"50%"}
          sx={{ background: "red" }}
          p={1}
        >
          <Typography>Player 1</Typography>
          <Typography>00</Typography>
        </Grid>
        <Grid
          container
          md={6}
          direction={"column"}
          textAlign={"center"}
          width={"50%"}
          sx={{ background: "green" }}
          p={1}
        >
          <Typography>Player 1</Typography>
          <Typography>00</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GameInfo;
