import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { TrendingUp } from '@mui/icons-material';
export default function TopBar( props ) {
    return (
        
        <AppBar sx={{ position: "sticky", bgcolor: "#167" }}>
            <Toolbar sx={{ display: "flex" }}>
                <TrendingUp sx={{ marginRight: "5px"}} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Sales Monitoring
                </Typography>
                <Button color="inherit">Profile</Button>
            </Toolbar>
        </AppBar>
                
    )
}