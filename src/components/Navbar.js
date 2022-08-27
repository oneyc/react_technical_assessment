import React from "react";
import classes from "./Navbar.module.css"
import { Link, Nav, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <React.Fragment>
            <div className={classes.greeting}>
                <h4>Hi, username</h4>
                <h3>Welcome to Access Workspace!</h3>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/screenB">My Products and Flightpaths</Link>

            </nav>
            <div className={classes.greeting}>
                <h4>Are you ready to level up?</h4>
                <h3>Visit Access Marketplace today!</h3>
            </div>
        </React.Fragment>

    )
}

export default Navbar;