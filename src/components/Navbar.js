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
            <nav className={classes.navigation}>
                <div className={classes.linkList}>
                    <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                    <Link to="/" className={classes.link}>Home</Link>
                </div>
                <div className={classes.linkList}>
                    <i class="fas fa-clock fa-2x"></i>
                    <Link to="/screenB" className={classes.link}>My Products and Flightpaths</Link>
                </div>
                <div className={classes.linkList}>
                    <i class="fas fa-heart fa-2x"></i>
                    <Link to="/screenB" className={classes.link}>Resources</Link>
                </div>
                <div className={classes.linkList}>
                    <i class="fas fa-shopping-cart fa-2x"></i>
                    <Link to="/screenB" className={classes.link}>SOW/Service Requests</Link>
                </div>
                <div className={classes.linkList}>
                    <i class="fas fa-cog fa-2x"></i>
                    <Link to="/screenB" className={classes.link}>Settings</Link>
                </div>
            </nav>
            <div className={classes.levelUp}>
                <h3>Are you ready to level up?</h3>
                <h4>Visit Access Marketplace today!</h4>
                <button type="button" class="btn btn-secondary">Find out more</button>

            </div>
        </React.Fragment>

    )
}

export default Navbar;