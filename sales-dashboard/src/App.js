import TopBar from "./components/common/TopBar";
import { Stack } from "@mui/material";
import SideBar from "./components/common/SideBar";
function App() {
  return (
    <div >
      
      <TopBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar></SideBar>
        
      </Stack>
    </div>
  );
}

export default App;
