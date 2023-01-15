import Head from "next/head";
import { Box, Container } from "@mui/material";
import { GameListToolbar } from "../components/game/game-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { GameListResults } from "../components/game/game-list-results";
import { customers } from "../__mocks__/customers";
import { useEffect, useState } from "react";
import Game from "../services/Game";
import { GameAddModal } from "../components/game/game-add-modal";

const Page = () => {
  const gameService = new Game();

  const [games, setGames] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newGame, setNewGame] = useState({ name: "", engine: "", logo: "" });

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    await gameService.getGames().then((res) => {
      setGames(res);
    });
  };

  const handleChangeNewGame = (key, value) => {
    setNewGame((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async () => {
    await gameService.addGame(newGame);
    fetchGames();
    setNewGame({ name: "", engine: "", logo: "" });
    setOpen(false);
  };
  return (
    <>
      <Head>
        <title>Games | Fiqstore</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <GameListToolbar handleOpen={handleOpen} />
          <GameAddModal
            handleClose={handleClose}
            open={open}
            handleChangeNewGame={handleChangeNewGame}
            onSubmit={onSubmit}
            state={newGame}
          />
          <Box sx={{ mt: 3 }}>
            <GameListResults games={games} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
