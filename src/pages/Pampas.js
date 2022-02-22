import { Fragment } from "react";
import Products from "../components/Shop/Products";
import { PAMPAS } from '../components/Shop/ProductsLists';
import classes from './Pages.module.css';
const Pampas = () => {
    return (
        <main>
            <div className={classes.box}>
                <div className={classes.headline}>Pampas</div>
                <Products productsData={PAMPAS} />
            </div>
        </main>
    );
}
export default Pampas;