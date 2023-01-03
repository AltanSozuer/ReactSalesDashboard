import PropTypes from "prop-types"

export default function AtomSpan({
    text,
    className,
    children
}){
    return (
        <span className={className}>
            {text}
            {children}
        </span>
    )
}

AtomSpan.defaultProps = {
    text: "Default Span Text",
    className: null,
    children: null
}

AtomSpan.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}