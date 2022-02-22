import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-a049b-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalAmount: cartData.totalAmount || 0,
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.log("failed try and catch");
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-a049b-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount || 0,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

    } catch (error) {
   console.log("failed try and catch");
    }
  };
};