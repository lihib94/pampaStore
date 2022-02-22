import { Fragment } from "react";
import Products from "../components/Shop/Products";
import { URNS } from '../components/Shop/ProductsLists';
import classes from './Pages.module.css';
const Urns = () => {
    return (
        <Fragment>
            <div className={classes.box}>
                <div className={classes.headline}>Urens</div>
                <Products productsData={URNS} />
            </div>
        </Fragment>
    );
}
export default Urns;