import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MyProducts from "../components/ScreenMid/MyProducts";
import FlightPaths from "../components/ScreenMid/FlightPaths";
import classes from "./ScreenB.module.css"

function ScreenB() {

    const [active, setActive] = useState(true);

    return (
      <>
        <main className={classes.container}>
            <MyProducts/>
            <FlightPaths/>
        </main>
      </>
    );
  }

export default ScreenB;