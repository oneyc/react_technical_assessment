import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ActivityCard from "../components/ScreenMid/ActivityCard";
import FlightPaths from "../components/ScreenMid/FlightPaths";
import FlightpathCard from "../components/ScreenMid/FlightpathCard";
import classes from "./ScreenA.module.css"

function ScreenA() {

    const [active, setActive] = useState(true);

    return (
      <>
        <div>
            <h2>My Flight Paths</h2>
            <FlightPaths/>
        </div>
        <div className={classes.lowerHalf}>
          <div className={classes.activityContainer}>        
              <h2>Activity</h2>
              <ActivityCard/>
              <ActivityCard/>
              <ActivityCard/>
          </div>
          <div className={classes.helpContainer}>        
              <h2>Help</h2>
              <ActivityCard/>
          </div>
        </div>
      </>
    );
  }

export default ScreenA;