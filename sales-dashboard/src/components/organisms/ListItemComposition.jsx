import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/css/link.css";

export default function ListItemComposition({
    to,
    icon,
    text,
    disablePadding
}) {
    return (
        <ListItem disablePadding={ disablePadding }  sx={{ "&:hover": { backgroundColor: "cyan" } }}>
            <Link to={ to } className="linkRoute" >
                <ListItemButton  sx={{ "&:hover": { backgroundColor: "inherit" } }}>
                    <div className="iconAndTextContainer">
                        <ListItemIcon >
                            { icon }
                        </ListItemIcon>
                        <ListItemText primary={ text }  />
                    </div>
                </ListItemButton>
            </Link>
        </ListItem>
    )
}