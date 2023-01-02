import { AppBar, Typography, Button, Box } from '@mui/material'
import { TrendingUp } from '@mui/icons-material';

export default function TopBar() {
    return (
        <AppBar elevation={0} sx={{ position: "sticky", bgcolor: "blueviolet"}}>
            <Box sx={{ display: "flex", padding: "20px" }}>
                <TrendingUp sx={{ marginRight: "5px"}} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Sales Monitoring
                </Typography>
                <Button color="inherit">Profile</Button>
            </Box>
        </AppBar>
                
    )
}