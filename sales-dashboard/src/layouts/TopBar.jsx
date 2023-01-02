import { AppBar, Typography, Box } from '@mui/material'
import { TrendingUp } from '@mui/icons-material';
import ProfileMenu from '../components/organisms/ProfileMenu';
import NotificationFragment from '../components/organisms/NotificationFragment';

export default function TopBar() {
    
    return (
        <AppBar elevation={0} sx={{ position: "sticky", bgcolor: "blueviolet"}}>
            <Box sx={{ display: "flex", padding: "15px", alignItems: "center" }}>
                <TrendingUp sx={{ marginRight: "5px"}} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Sales Monitoring
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <NotificationFragment />
                    <ProfileMenu />
                </Box>
            </Box>
        </AppBar>
                
    )
}