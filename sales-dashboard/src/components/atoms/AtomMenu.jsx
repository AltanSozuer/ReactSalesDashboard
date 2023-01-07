import { Menu } from "@mui/material";
import { useState } from "react";

export default function AtomMenu({
    id,
    open,
    onClose,
    sx,
    children
}) {

    const [ anchorEl, setAnchorEl ] = useState(null);
    const handleClick = ( eve ) => { setAnchorEl(eve.currentTarget) };
    const handleClose = () => { setAnchorEl(null) }; 
    return (
        <Menu
            id={ id }
            open={ Boolean(anchorEl) }
            onClose={ handleClose }
            sx={sx}>
            { children }
        </Menu>
    )
}