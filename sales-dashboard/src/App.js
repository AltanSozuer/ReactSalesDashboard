import TopBar from "./layouts/TopBar";
import { Box, Stack } from "@mui/material";
import SideBar from "./layouts/SideBar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from 'react-router-dom'
import Product from "./pages/Product";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import User from "./pages/User";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import Orders from "./pages/Orders";
import Sales from "./pages/Sales";
import Settings from "./pages/Settings";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <Box>
        <TopBar />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <SideBar />
          <Box sx={{ flex: 4 }}>
            <Routes>
              <Route path={"/"} element={ <HomePage />} />
              <Route path={"/user"} element={ <Users />} />
              <Route path={"/user/:id"} element={ <User />} />
              <Route path={"/newUser"} element={ <NewUser />} />
              <Route path={"/product"} element={ <Products />} />
              <Route path={"/product/:id"} element={ <Product />} />
              <Route path={"/newProduct"} element={ <NewProduct />} />
              <Route path={"/order"} element={ <Orders />} />
              <Route path={"/sales"} element={ <Sales />} />
              <Route path={"/settings"} element={ <Settings />} />
              <Route path="*" element={ <ErrorPage />} />
            </Routes>
          </Box>
        </Stack>
      </Box>
  );
}

export default App;
