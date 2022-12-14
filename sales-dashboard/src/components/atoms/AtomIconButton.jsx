import { IconButton } from "@mui/material";
import PropTypes from 'prop-types'

export default function AtomIconButton({
    color,
    text,
    aria_label,
    edge,
    variant,
    disabled,
    size,
    sx,
    className,
    component,
    onClick,
    children
}) {
    
    return (
        <IconButton
            color={ color }
            variant={ variant }
            disabled={ disabled }
            component={ component }
            size={ size }
            aria-label={ aria_label }
            edge={ edge }
            className={ className }
            sx={ sx }
            onClick= { onClick }
        >
           {text}
           {children}
        </IconButton>
    )
}



AtomIconButton.propTypes = {
    color: PropTypes.oneOf([
        "white", 
        "black",
        "blue",
        "primary",
        "secondary",
        "success",
        "error"
    ]),
    text: PropTypes.string,
    variant: PropTypes.oneOf([
        "contained"
    ]),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf([
        "small",
        "medium",
        "large"
    ]),
    onClick: PropTypes.func,
    childs: PropTypes.node
}

AtomIconButton.defaultProps = {
    color: "primary",
    text: "Default Button Text",
    variant: "contained",
    disabled: false,
    size: "large"
}

