import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

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

export const ProductAddModal = ({
  handleClose,
  open,
  handleChangeNewProduct,
  onSubmit,
  state,
  games,
}) => {
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
            Add New Product
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel id="selet-game-label">Select Game</InputLabel>
            <Select
              labelId="selet-game-label"
              id="selet-game-label"
              value={state.gameId}
              label="Select Game"
              onChange={(e) => handleChangeNewProduct("gameId", e.target.value)}
            >
              {games &&
                games.length &&
                games.map((item) => {
                  return <MenuItem value={item._id}>{item.name}</MenuItem>;
                })}
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            margin="normal"
            fullWidth
            type={"number"}
            value={state.amount}
            onChange={(e) => handleChangeNewProduct("amount", e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Unit"
            variant="outlined"
            margin="normal"
            fullWidth
            value={state.unit}
            onChange={(e) => handleChangeNewProduct("unit", e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            margin="normal"
            fullWidth
            type={"number"}
            value={state.price}
            onChange={(e) => handleChangeNewProduct("price", e.target.value)}
          />
          <Button variant="contained" fullWidth onClick={onSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
