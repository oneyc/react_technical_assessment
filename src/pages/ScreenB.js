import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MyProducts from "../components/ScreenMid/MyProducts";
import FlightPaths from "../components/ScreenMid/FlightPaths";

function ScreenB() {

    const [active, setActive] = useState(true);

    return (
      <>
        <main>
            <MyProducts/>
            <FlightPaths/>
        </main>
      </>
    );
  }

export default ScreenB;