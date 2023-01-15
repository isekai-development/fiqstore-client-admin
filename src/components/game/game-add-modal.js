import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const GameAddModal = ({ handleClose, open, handleChangeNewGame, onSubmit, state }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={"center"}>
            Add New Game
          </Typography>
          <TextField
            id="outlined-basic"
            label="Game Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={state.name}
            onChange={(e) => handleChangeNewGame("name", e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Engine"
            variant="outlined"
            margin="normal"
            fullWidth
            value={state.engine}
            onChange={(e) => handleChangeNewGame("engine", e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Logo Link"
            variant="outlined"
            margin="normal"
            fullWidth
            value={state.logo}
            onChange={(e) => handleChangeNewGame("logo", e.target.value)}
          />
          <Button variant="contained" fullWidth onClick={onSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
