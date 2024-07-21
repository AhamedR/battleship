import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Confetti from "react-confetti";

import useGameLogic from "../../hooks/useGameLogic";

const WinNotification: React.FC = () => {
  const { isWon, restartGame } = useGameLogic();
  const { width, height } = useWindowSize();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isWon) {
      setOpen(true);
    }
  }, [isWon]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRestart = () => {
    handleClose();
    restartGame();
  };

  return (
    <>
      {!isWon ? null : (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={1000}
        />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Congratulations!!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have destroyed all the enemies. You win the game!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} autoFocus>
            Restart the Game
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WinNotification;
