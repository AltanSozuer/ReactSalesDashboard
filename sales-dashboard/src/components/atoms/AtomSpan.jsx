

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