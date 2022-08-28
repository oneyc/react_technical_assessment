import React from "react";
import classes from "./Sidebar.module.css"
import Carousel from "./Carousel/Carousel";
import HelpCard from "./ScreenMid/Card/HelpCard";
import QuickLinks from "./QuickLinks";

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
                <QuickLinks/>
            <h3 className={classes.linkText}>Help</h3>
            <HelpCard/>
        </React.Fragment>
    )
}

export default Sidebar;