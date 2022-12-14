import { Box } from "@mui/material";
import InfoboxGroup from "../components/organisms/InfoboxGroup";
import LastTransactionsWidget from "../components/organisms/LastTransactionsWidget";
import LineCharts from "../components/organisms/LineChart";
import UserWidget from "../components/organisms/UserWidget";
export default function HomePage(props) {
    return (
        <Box sx={{ flex: 4 }}>
            <InfoboxGroup />
            <Box sx={{ marginTop: "30px" }}>
                <LineCharts />
                <Box sx={{ display: "flex" }}>
                    <UserWidget />
                    <LastTransactionsWidget />
                </Box>
            </Box>
        </Box>
    )
}