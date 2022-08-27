import classes from "./FlightpathCard.module.css"

const FlightpathCard = () => {

    return (
        <div className={classes.card}>
            <div className={classes.main}>
                <div>
                    <h4>FP A</h4>
                    <h3>Access Volcanic</h3>
                </div>
                <div className={classes.rightSection}>
                    <h4>90% complete</h4>
                    <button type="button" className={classes.button}>View Next Step</button>
                    <h4>View Details</h4>
                </div>

            </div>

        </div>
    )
}

export default FlightpathCard;