import "../../styles/css/skeleton.css"
import { Skeleton } from "@mui/material";

export default function SkeletonRowGroup({ rowCount }) {
    return (
        <span>
            {
            [...Array(rowCount)].map( ( _ , indx) => {
                return (
                    <div className="skeleton-row" key={indx}>
                        <Skeleton animation="wave" variant="text" width="130px" height={60}/>
                        <div style={{display:"flex"}}>
                            <Skeleton animation="wave" variant="circular" width="60px" height={60}/>
                            <Skeleton animation="wave" variant="text" width="200px" height={60}/>
                        </div>
                        <Skeleton animation="wave" variant="text" width="140px" height={60}/>
                        <Skeleton animation="wave" variant="text" width="120px" height={60}/>
                        <Skeleton animation="wave" variant="text" width="140px" height={60}/>
                        <Skeleton animation="wave" variant="text" width="130px" height={60}/>
                    </div>
                )
            })
            }
        </span>
    )
}