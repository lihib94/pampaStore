import { Fragment } from "react";
import Products from "../components/Shop/Products";
import { GARLANDS } from '../components/Shop/ProductsLists';
import classes from './Pages.module.css';
const Garlands = () => {
    return (
        <Fragment>
            <div className={classes.box}>
                <div className={classes.headline}>Garlands</div>
                <Products productsData={GARLANDS} />
            </div>
        </Fragment>
    );
}
export default Garlands;
