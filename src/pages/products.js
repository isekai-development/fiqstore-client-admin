import Head from "next/head";
import { Box, Container } from "@mui/material";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { ProductListResults } from "../components/product/product-list-results";
import { customers } from "../__mocks__/customers";
import { useEffect, useState } from "react";
import Product from "../services/Product";
import Game from "../services/Game";
import { ProductAddModal } from "../components/product/product-add-modal";

const Page = () => {
  const productService = new Product();
  const gameService = new Game();

  const [games, setGames] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newProduct, setNewProduct] = useState({ amount: "", unit: "", gameId: "", price: "" });

  useEffect(() => {
    fetchProducts();
    fetchGames();
  }, []);

  const fetchProducts = async () => {
    productService.getVouchers().then((res) => {
      setProducts(res);
    });
  };

  const fetchGames = async () => {
    await gameService.getGames().then((res) => {
      setGames(res);
    });
  };

  const handleChangeNewProduct = (key, value) => {
    setNewProduct((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async () => {
    await productService.addVoucher(newProduct);
    fetchProducts();
    setNewProduct({ amount: "", unit: "", gameId: "", price: "" });
    setOpen(false);
  };
  return (
    <>
      <Head>
        <title>Products | Fiqstore</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar handleOpen={handleOpen} />
          <ProductAddModal
            handleClose={handleClose}
            open={open}
            handleChangeNewProduct={handleChangeNewProduct}
            state={newProduct}
            onSubmit={onSubmit}
            games={games}
          />
          <Box sx={{ mt: 3 }}>
            <ProductListResults products={products} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
