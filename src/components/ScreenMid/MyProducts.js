import classes from "./MyProducts.module.css"
import ProductCard from "./Card/ProductCard";

const MyProducts = () => {
    return (
        <div className={classes.container}>
            <h2>My Products</h2>
            <div className={classes.cardContainer}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default MyProducts;