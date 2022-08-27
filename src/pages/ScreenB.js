import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ActivityCard from "../components/ScreenMid/ActivityCard";
import FlightpathCard from "../components/ScreenMid/FlightpathCard";

function ScreenB() {

    const [active, setActive] = useState(true);

    return (
      <>
        <main>
            <h2>My Flight Paths B</h2>
            <FlightpathCard/>
        </main>
        <div>        
            <h2>Activity B</h2>
            <ActivityCard/>
        </div>
        <div>
            <h2>Help</h2>
            <ActivityCard/>
        </div>

      </>
    );
  }

export default ScreenB;