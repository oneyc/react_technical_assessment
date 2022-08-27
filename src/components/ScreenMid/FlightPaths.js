import classes from "./FlightPaths.module.css"
import FlightpathCard from "./Card/FlightpathCard";
import React from "react";
const FlightPaths = () => {

    return (
        <React.Fragment>
            <h2>My Flightpaths</h2>
            <div className={classes.container}>
                <FlightpathCard/>
                <FlightpathCard/>
                <FlightpathCard/>
            </div>
        </React.Fragment>
    )
}

export default FlightPaths;