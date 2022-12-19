export default function AtomForm({
    children,
    classname
}){
    return (
        <form className={ classname }>
            { children }
        </form>
    )
}