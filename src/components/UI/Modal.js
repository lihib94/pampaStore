import { Fragment} from 'react';
import { useNavigate  } from "react-router-dom";
import { useSelector} from 'react-redux';
import Cart from '../Cart/Cart.js';
import classes from './Modal.module.css';
import ReactDom from 'react-dom';
const Modal = ({ open, children, onClose }) => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    
    const navigate = useNavigate();
   const orderClickHandler = () =>{
     navigate("/Home");
    }

    if (!open) return null;
    return ReactDom.createPortal(
        <Fragment >
            <div className={classes.overlay} onClick={onClose} />
            <div className={classes.modal}>
                <button className={classes.btn} onClick={onClose}>Close</button>
                {children}
                <Cart />
                <div className={classes.total}>
                     Total Quantity: {totalQuantity} items
                <br/>
                <div className={classes.total}></div>
                      Total Amount: {totalAmount} $
                      {/* {totalAmount<0 ? totalAmount : 0} */}
                </div>
                <button className={classes.btn} onClick={orderClickHandler}>Order</button>
                
            </div>
        </Fragment>,
        document.getElementById('portal')
    );
};

export default Modal;