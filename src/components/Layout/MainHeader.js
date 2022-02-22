import { Fragment,useContext } from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import AuthContext from '../../store/auth-context.js'
const MainHeader = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <Fragment>
    <header className={classes.header}>
    <div className={classes.LogInOutUserContainer}>
                  {!isLoggedIn && (
                          <Link className={classes.LogInOutUser} to='/auth'>Login</Link>
                      )}
                      {isLoggedIn && (
                          <Link className={classes.LogInOutUser} to='/profile'>Profile</Link>
                      )}
                      {isLoggedIn && (
                          <button className={classes.LogInOutUser} onClick={logoutHandler}>Logout</button>
                      )}
              </div>
      <nav className={classes.navBar}>
              <div className={classes.navlinks}>
                <Link   className={classes.navlink} to={`/Pampas`}>Pampas</Link> {/* still need to add CSS:navlink on the css module */}
                <Link  className={classes.navlink} to={`/Candles`}>Candles</Link>
                <Link className={classes.h1Link} to={`/Home`}>pampaStore</Link>
                <Link  className={classes.navlink} to={`/Urns`}>Urns</Link>
                <Link  className={classes.navlink} to={`/Garlands`}>Garlands</Link>
              </div>
     </nav>
           <div className={classes.cartButton}>
            <CartButton/>
          </div>
    </header>
    </Fragment>
  );
};

export default MainHeader;