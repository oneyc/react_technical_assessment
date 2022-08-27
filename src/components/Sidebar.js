import React from "react";
import classes from "./Sidebar.module.css"
import Carousel from "./Carousel/Carousel";

// import { Nav, NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <React.Fragment>
            <div>
                <input type="text" className={classes.searchbar} placeholder="Search.."/>
            </div>
            <div className={classes.news}>
                <h3>News Updates</h3>
                <Carousel/>
            </div>
            <h3 className={classes.linkText}>Quick Links</h3>
            <div className={classes.link_container}>
                <div className={classes.link}>
                    <h6>Learning</h6>
                    <h4>An essential guide to workspace</h4>
                </div>
                <div className={classes.link}>
                    <h6>Learning</h6>
                    <h4>An essential guide to workspace</h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;