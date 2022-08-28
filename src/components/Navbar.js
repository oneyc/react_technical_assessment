import React from "react";
import classes from "./Navbar.module.css"
import { Link, Nav, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login, logout} from "../redux/userSlice"
import { useSelector } from 'react-redux';

const Navbar = () => {
    
    const dispatch = useDispatch();
    const loginStatus = useSelector((state) => {
        return state.userAction.isLoggedIn
    })
    const loginHandler = () => {
        dispatch(login())
        console.log("loginStatus", loginStatus)
    }
    const logoutHandler = () => {
        dispatch(logout())
        console.log("logoutHandler", loginStatus)
    }

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
                {loginStatus ? <div className={classes.linkList}>
                    <i class="fas fa-cog fa-2x"></i>
                    <Link to="/settings" className={classes.link}>Settings</Link>
                </div> : null}
            </nav>
            <div className={classes.levelUp}>
                <h3>Are you ready to level up?</h3>
                <h4>Visit Access Marketplace today!</h4>
                {!loginStatus ? <button type="button" class="btn btn-outline-dark" onClick={loginHandler}>Take me there</button>
                :<button type="button" class="btn btn-outline-dark" onClick={logoutHandler}>Take me out</button>}
            </div>
        </React.Fragment>

    )
}

export default Navbar;