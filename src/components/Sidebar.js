import React, {useState} from "react";
import classes from "./Sidebar.module.css"
import Carousel from "./Carousel/Carousel";
import HelpCard from "./ScreenMid/Card/HelpCard";
import QuickLinks from "./QuickLinks";
import { useLocation } from "react-router-dom";


const Sidebar = () => {
    const [isHomePage, setIsHomePage] = useState(true);

    const location = useLocation();

    return(
        <React.Fragment>
            <div>
                <input type="text" className={classes.searchbar} placeholder="Search.."/>
            </div>
            <div className={classes.news}>
                <h3>News Updates</h3>
                <Carousel/>
            </div>
            {location.pathname == "/" ? <h3 className={classes.linkText}>Quick Links</h3> : null}
            {location.pathname == "/" ? <QuickLinks/> : null}
            <h3 className={classes.linkText}>Help</h3>
            <HelpCard/>
        </React.Fragment>
    )
}

export default Sidebar;