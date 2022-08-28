import classes from "./QuickLinks.module.css"
import React, {useEffect, useState} from "react";
import { db } from "../firebase/init-firebase";
import { collection, getDocs } from "firebase/firestore";

const QuickLinks = () => {

    const [quickLinks, setQuickLinks] = useState([]);

    const getData = async() => {
        const querySnapshot = await getDocs(collection(db, "quickLinks"));

        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id, 
                title: doc.data().title,
                type: doc.data().type,
                url: doc.data().link,
                forEdit: false,
            })
        });
        setQuickLinks(data)
    }

    useEffect(() => {
        getData();
    }, [])

    const mapQuickLinks = quickLinks.map((link) => {
        return (
                <div className={classes.link}>
                    <h6>{link.type}</h6>
                    <h4>{link.title}</h4>
                </div>
        )
    })

    if(quickLinks.length === 0){
        return (
                <h3>Loading...</h3>
            )
    }
    return (
        <React.Fragment>            
            <div className={classes.link_container}>
                {mapQuickLinks}
            </div>
        </React.Fragment>
    )
}

export default QuickLinks;