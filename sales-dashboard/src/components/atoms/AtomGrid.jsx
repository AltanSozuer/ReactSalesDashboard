import { Grid } from "@mui/material";

export default function AtomGrid({
    container,
    item,
    spacing,
    justifyContent,
    direction,
    xs,
    children,
    sx,
    className
}){
    console.log("asdasd: ", {
        container,
        item,
        spacing,
        justifyContent,
        direction,
        xs,
        children,
        sx,
        className
    })
    return (
        <Grid container={ container }
            item={ item }
            xs={ xs }
            spacing={ spacing }
            direction= { direction }
            justifyContent= { justifyContent }
            sx={ sx }
            className={ className }>
            {children}
        </Grid>
    )
}


AtomGrid.defaultProps = {
    container: false,
    item: false,
    direction: "row",
    justifyContent: "center",
    spacing: 0
}