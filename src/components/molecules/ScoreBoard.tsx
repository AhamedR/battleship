import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ScoreBoardProps {
  score: number;
  name: string;
  color?: string;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({
  score,
  name,
  color = "#FFB300",
}) => {
  // Convert single digits to zero-padded strings, 0 => 00 | 2 => 02 | 11 => 11
  const formattedScore = String(score).padStart(2, "0");

  return (
    <Grid xs={6}>
      <Box style={{ padding: "16px", backgroundColor: color }}>
        <Typography variant="h4" align="center" borderBottom={"solid 1px "}>
          {formattedScore}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {name}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ScoreBoard;
