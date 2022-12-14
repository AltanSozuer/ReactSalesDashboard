import { Box } from "@mui/material";
import InfoboxGroup from "../components/organisms/InfoboxGroup";
import LineCharts from "../components/organisms/LineChart";
export default function HomePage(props) {
    return (
        <Box sx={{ flex: 4 }}>
            <InfoboxGroup />
            <Box sx={{ marginTop: "30px" }}>
                
                <LineCharts />
            </Box>
        </Box>
    )
}