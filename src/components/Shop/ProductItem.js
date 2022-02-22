import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();


  const { title, price, description, id, img } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );


  };

  return (
    <ul>
    <li className={classes.item}>
      <Card>
        <header className={classes.header}>
          <img className={classes.picture} src={img} alt={img} />

          <div className={classes.itemInfo}>
            <h3 className={classes.itemTitle}>{title}</h3>
            <p className={classes.itemdescription}>{description}</p>
            <div className={classes.price}>${price.toFixed(2)}</div>
          </div>

        </header>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
    </ul>
  );
};

export default ProductItem;