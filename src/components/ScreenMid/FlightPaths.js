import classes from "./FlightPaths.module.css"
import FlightpathCard from "./FlightpathCard";
const FlightPaths = () => {

    return (
        <div className={classes.container}>
            <FlightpathCard/>
            <FlightpathCard/>
            <FlightpathCard/>
        </div>
    )
}

export default FlightPaths;