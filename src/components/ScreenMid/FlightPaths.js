import classes from "./FlightPaths.module.css"
import FlightpathCard from "./Card/FlightpathCard";
const FlightPaths = () => {

    return (
        <div className={classes.container}>
            <h2>My Flightpaths</h2>
            <FlightpathCard/>
            <FlightpathCard/>
            <FlightpathCard/>
        </div>
    )
}

export default FlightPaths;