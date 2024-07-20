import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import HitImg from "../../assets/hit.png";
import PlaceholderImg from "../../assets/placeholder.png";
import MissImg from "../../assets/miss.png";

interface CellProps {
  value: string;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  const markerImg =
    value === "hit" ? HitImg : value === "miss" ? MissImg : PlaceholderImg;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1px",
      }}
    >
      <Button
        onClick={onClick}
        aria-label={`cell ${value}`}
        sx={{ padding: "0", width: "100%", minWidth: "auto", height: "auto" }}
      >
        <img
          style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          src={markerImg}
          alt="hit or miss"
        />
      </Button>
    </Box>
  );
};

export default Cell;
