 import classes from "./HelpCard.module.css"

const HelpCard = () => {
    return (
        <div className={classes.container}>
            <h6>Key Contacts</h6>
            <div className={classes.contact}>
                <i class="fas fa-user fa-2x"></i>
                <div className={classes.contactInfo}>
                    <h6>Name</h6>
                    <p>Sales Manager</p>
                </div>
                <button type="button" class="btn btn-outline-dark">Contact</button>
            </div>

            <div className={classes.contact}>
                <i class="fas fa-user fa-2x"></i>
                <div className={classes.contactInfo}>
                    <h6>Name</h6>
                    <p>Sales Manager</p>
                </div>
                <button type="button" class="btn btn-outline-dark">Contact</button>
            </div>
            
            <hr/>

            <div className={classes.supportContainer}>
                <h5>Get Support</h5>
                <button type="button" class="btn btn-outline-dark">Link</button>
            </div>
        </div>    
    )
}

export default HelpCard;