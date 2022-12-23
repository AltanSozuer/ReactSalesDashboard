import { Grid } from "@mui/material";

export default function AtomGrid({
    container,
    item,
    spacing,
    justifyContent,
    alignItems,
    direction,
    xs,
    children,
    sx,
    className
}){
    return (
        <Grid container={ container }
            item={ item }
            xs={ xs }
            spacing={ spacing }
            direction= { direction }
            justifyContent= { justifyContent }
            alignItems= {alignItems}
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
    alignItems: "flex-start",
    spacing: 0
}