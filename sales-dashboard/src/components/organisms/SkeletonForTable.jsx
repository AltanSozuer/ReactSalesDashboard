import { Skeleton, Stack } from "@mui/material";
import SkeletonRowGroup from "../molecules/SkeletonRowGroup";
import "../../styles/css/skeleton.css"
export default function SkeletonForTable({
    rowCount
}) {
    return (
        <Stack spacing={1}>
            <Skeleton animation="wave" variant="text" width="100%" height={60}/>
            <SkeletonRowGroup rowCount={rowCount} />
        </Stack>
    )
}
