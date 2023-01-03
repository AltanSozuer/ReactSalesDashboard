import { Box } from "@mui/material";
import PropTypes from "prop-types"
export default function AtomBox({
    sx,
    component,
    children
}) {
    return (
        <Box
            sx={ sx }
            component={ component }>
            { children }
        </Box>
    )
}

AtomBox.defaultProps = {
    text: "Default Box Text",
    className: null,
    children: null
}

AtomBox.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}