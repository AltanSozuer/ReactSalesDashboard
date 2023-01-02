import { Button, Avatar, Menu, MenuItem } from '@mui/material'
import { useState } from 'react';

export default function ProfileMenu(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button color="inherit" onClick={handleClick} sx={{marginLeft: "-8px"}}  >
                    <Avatar alt="Profile" 
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        sx={{ border: "solid", borderWidth: "2px" ,borderColor: "green"}} />
                </Button>
                
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorPosition={{
                        left: 0,
                        top: 50
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    disableScrollLock={ true }>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
        </div>
    )
}