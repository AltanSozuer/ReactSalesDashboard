import { Button } from "@mui/material";
import PropTypes from 'prop-types'

export default function AtomButton({
    color,
    text,
    variant,
    disabled,
    size,
    component,
    onClick,
    children,
    sx
}) {
    return (
        <Button
            color={ color }
            variant={ variant }
            disabled={ disabled }
            component={ component }
            size={ size }
            sx={ sx }
            onClick= { onClick } >
           {text}
           {children}
        </Button>
    )
}



AtomButton.propTypes = {
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
        "contained",
        "outlined"
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

AtomButton.defaultProps = {
    color: "primary",
    text: "Default Button Text",
    variant: "contained",
    disabled: false,
    size: "medium"
}

