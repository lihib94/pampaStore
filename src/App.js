import React, { Fragment, useEffect, Suspense, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Navigate, Routes, useNavigate } from 'react-router-dom';
import { uiActions } from './store/ui-slice';
import { sendCartData, fetchCartData } from './store/cart-actions';
import AuthContext from './store/auth-context';


const Pampas = React.lazy(() => import('./pages/Pampas'));
const Candles = React.lazy(() => import('./pages/Candles'));
const Garlands = React.lazy(() => import('./pages/Garlands'));
const Urns = React.lazy(() => import('./pages/Urns'));
const Home = React.lazy(() => import('./pages/Home'));
const Modal = React.lazy(() => import('./components/UI/Modal.js'));
const Layout = React.lazy(() => import('./components/Layout/Layout'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Profile = React.lazy(() => import('./pages/Profile'));


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
 
  const authCtx = useContext(AuthContext);
  

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
    <Suspense fallback={<p>Loading...</p>}>
      <Layout>
        {/* <Products /> */}
      
      </Layout>
      <Modal open={showCart} onClose={() => dispatch(uiActions.cartToFalse())} />
        <Routes>
          <Route path='/' element={<Navigate replace to="home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/pampas' element={<Pampas />} />
          <Route path='/Candles' element={<Candles />} />
          <Route path='/Urns' element={<Urns />} />
          <Route path='/Garlands' element={<Garlands />} />
          {!authCtx.isLoggedIn && <Route path='/Auth' element={<Auth />} />}
          {authCtx.isLoggedIn && <Route path='/profile' element={<Profile />}/>}
          {!authCtx.isLoggedIn  && <Route path='/profile' element={<Navigate replace to="/home" />} />}
  
          {/* <Route path='/Profile' element={<Profile />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;