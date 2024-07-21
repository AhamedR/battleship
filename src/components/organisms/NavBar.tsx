import React from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import useGameLogic from "../../hooks/useGameLogic";

const Navbar: React.FC = () => {
  const { showHitLocations, toggleHitLocations, restartGame } = useGameLogic();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#9595fb " }}>
      <Toolbar>
        <Grid container direction={{ xs: "column", sm: "row" }} pt={{ xs: 2, sm: 0 }} pb={{ xs: 1, sm: 0 }} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Battleship Game</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            container
            alignItems="center"
            justifyContent={{ xs: "center", sm: "flex-end" }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={showHitLocations}
                  onChange={toggleHitLocations}
                  color="default"
                  inputProps={{ "aria-label": "toggle hit locations" }}
                />
              }
              label="Show Hit Locations"
            />
            <Button
              color="inherit"
              onClick={restartGame}
              startIcon={<RestartAltIcon />}
            >
              Restart
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
