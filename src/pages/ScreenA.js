import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ActivityCard from "../components/ScreenMid/Card/ActivityCard";
import HelpCard from "../components/ScreenMid/Card/HelpCard";
import FlightPaths from "../components/ScreenMid/FlightPaths";
import classes from "./ScreenA.module.css"

function ScreenA() {

    const [active, setActive] = useState(true);

    return (
      <>
        <div>
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
              <HelpCard/>
          </div>
        </div>
      </>
    );
  }

export default ScreenA;