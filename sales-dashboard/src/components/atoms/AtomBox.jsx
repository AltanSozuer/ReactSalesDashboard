import { Box } from "@mui/material";

export default function AtomBox({
    sx,
    component,
    children
}) {
    return (
        <Box
            sx={ sx }
            component={ component }
        >
            { children }
        </Box>
    )
}