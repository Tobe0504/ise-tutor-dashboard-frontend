import { Skeleton } from "@mui/material"
import classes from "./Test.module.css"


const Test = () => {
    return <section className={classes.container}>
        <div className={classes.leftSection}>
            <Skeleton />
        </div>
        <div className={classes.rightSection}>
            <div className={classes.header}></div>
            <div className={classes.body}></div>
        </div>
    </section>
}

export default Test