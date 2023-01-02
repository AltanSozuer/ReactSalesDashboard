import { NotificationsActive } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

export default function NotificationFragment() {
    return (
        <div>
            <IconButton size="large" sx={{ mr: "5px"}}>
            <Badge badgeContent={4} color="success" >
                <NotificationsActive sx={{ color: "white"}}/>
            </Badge>
            </IconButton>
        </div>
    )
}