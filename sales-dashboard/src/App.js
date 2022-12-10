import TopBar from "./components/common/TopBar";
import { Box, Stack } from "@mui/material";
import SideBar from "./components/common/SideBar";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Box>
      <TopBar />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <SideBar />
        <HomePage />
      </Stack>
    </Box>
  );
}

export default App;
