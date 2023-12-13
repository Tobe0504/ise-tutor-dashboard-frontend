import { Skeleton } from "@mui/material";
import { sideNavItems } from "../../Utilities/sideNavItems";
import classes from "./SideNavLoaderContainer.module.css"


const SideNavLoaderContainer = () => {
    return <div className={classes.container}>
        <div className={classes.header}>
            <Skeleton variant="rounded"  height={23} />
        </div>

        <div className={classes.sideNavItems}>
            {sideNavItems.map((data) => {
                return <div key={data.title} className={classes.navItem}>
                        <Skeleton variant="circular" width={15} height={15}  />
                        <Skeleton variant="rounded" width="100%" height={15} animation="wave" />

                </div>
})}
        </div>

        <div className={`${classes.navItem} ${classes.lastNavItem}`}>
                        <Skeleton variant="circular" width={15} height={15}  />
                        <Skeleton variant="rounded"  height={15} animation="wave" />

                </div>
    </div>
}

export default SideNavLoaderContainer; 