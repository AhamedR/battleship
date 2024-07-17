import Grid from "@mui/material/Grid";
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
    <Grid item xs={6}>
      <Grid item width={"100%"} p={1} sx={{ backgroundColor: color }}>
        <Typography
          variant="h4"
          align="center"
          m={"8px"}
          pb={"8px"}
          borderBottom={"solid 1px"}
          sx={{ fontWeight: "bold" }}
        >
          {formattedScore}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          p={"8px"}
          sx={{ fontWeight: "bold" }}
        >
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ScoreBoard;
