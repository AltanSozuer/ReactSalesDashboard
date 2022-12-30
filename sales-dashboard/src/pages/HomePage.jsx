import { Box } from "@mui/material";
import InfoboxGroup from "../components/organisms/InfoboxGroup";
import LastTransactionsWidget from "../components/organisms/LastTransactionsWidget";
import LineCharts from "../components/organisms/LineChart";
import UserWidget from "../components/organisms/UserWidget";
import { ACTIVE_USER_COUNT } from "../DummyData/MonthlyActiveUser";

export default function HomePage() {
    return (
        <Box sx={{ flex: 4 }}>
            <InfoboxGroup />
            <Box sx={{ marginTop: "30px" }}>
                <LineCharts  
                    title="Monthly Active Users"
                    width={1000}
                    height={400}
                    data={ACTIVE_USER_COUNT}
                    chartMargin= {{
                        top: 10,
                        right: 20,
                        left: 20,
                        bottom: 10,
                    }}
                    xAxisDataKey="month"
                    lineDataKey="Active User" />
                <Box sx={{ display: "flex" }}>
                    <UserWidget />
                    <LastTransactionsWidget />
                </Box>
            </Box>
        </Box>
    )
}