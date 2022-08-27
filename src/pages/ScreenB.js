import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ActivityCard from "../components/ScreenMid/ActivityCard";
import FlightPaths from "../components/ScreenMid/FlightPaths";

function ScreenB() {

    const [active, setActive] = useState(true);

    return (
      <>
        <main>
            <h2>My Flightpaths</h2>
            <FlightPaths/>
        </main>
      </>
    );
  }

export default ScreenB;