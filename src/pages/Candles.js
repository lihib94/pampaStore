import { Fragment } from "react";
import Products from "../components/Shop/Products";
import { CANDLES } from '../components/Shop/ProductsLists';
import classes from './Pages.module.css';
const Candles = () => {
    return (
        <Fragment>
            <div className={classes.box}>
                <div className={classes.headline}>Candles</div>
                <Products productsData={CANDLES} />
            </div>
        </Fragment>
    );
}
export default Candles;