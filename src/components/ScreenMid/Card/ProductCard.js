import classes from "./ProductCard.module.css"

const ProductCard = () => {
    return (
        <div className={classes.container}>
            <i class="far fa-image fa-3x"></i>
            <h5>Recruitment Website</h5>
            <h4>Access Voltaic</h4>
            <p>Premier</p>
        </div>
    )
}

export default ProductCard;