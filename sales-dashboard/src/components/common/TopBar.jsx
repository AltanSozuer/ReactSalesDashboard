import { AppBar, Toolbar, Box, IconButton, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AtomBox from '../atoms/AtomBox'

export default function TopBar( props ) {
    return (
        <AtomBox sx={{ flexGrow: 1, position:"sticky" }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sales Monitoring
                    </Typography>
                    <Button color="inherit">Profile</Button>
                </Toolbar>
            </AppBar>
        </AtomBox>            
    )
}