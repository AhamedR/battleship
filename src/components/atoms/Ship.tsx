import Grid from "@mui/material/Grid";

import HitImg from "../../assets/hit-small.png";
import MissImg from "../../assets/miss-small.png";

interface ShipProps {
  name: string;
  img: string;
  hits: boolean[];
}

const Ship: React.FC<ShipProps> = ({ name, img, hits }) => {
  return (
    <Grid container item spacing={2} wrap="nowrap">
      <Grid item sm={6} xs={3} minWidth={"50%"} pr={2}>
        <img src={img} alt={name} style={{ width: "100%", height: "auto" }} />
      </Grid>
      <Grid item sm={6} xs={9} sx={{ display: "flex", alignItems: "center" }}>
        {hits.map((hit, index) => (
          <img
            key={index}
            src={hit ? HitImg : MissImg}
            alt={hit ? "Hit" : "Miss"}
            style={{ minWidth: "12px", width: "10%" }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Ship;
