import classes from './Home.module.css';
import mainPic from '../Photos/main.jpg';
import { Fragment } from 'react';
import { FaTruck } from 'react-icons/fa';
import { BiCreditCard } from 'react-icons/bi';
import { GiWheat } from 'react-icons/gi';
const Home = () => {
  return (
    <Fragment>
    <div className={classes.main}>
        <div className={classes.cardsContainer}>
          <div className={classes.card}>
              <FaTruck />
              <div className={classes.text}>
               <p> Fast delivery to all parts of the country </p>
               <p>The purchase on the site is 100% secure </p>
               <p> The purchase on the site is 100% secure</p>
              </div>
          </div>
          <div className={classes.card}>
              <BiCreditCard />
              <div className={classes.text}>
              Free shipping on purchases over 50$ <br/>
              </div>
          </div>
          <div className={classes.card}>
              <GiWheat />
              <div className={classes.text}>
              Delivery times are up to 5-14 business<br/>
              </div>
          </div>
        </div>

    </div>
    </Fragment>
  );
}
export default Home;


{/* <tr className={classes.icons}>
              <th><FaTruck /></th>
              <th><BiCreditCard /></th>
              <th><GiWheat /></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className={classes.infoPart1}>Fast delivery to all parts of the country</td>
            <td className={classes.infoPart2}>The purchase on the site is 100% secure</td>
            <td className={classes.infoPart3}>The purchase on the site is 100% secure</td>
          </tr>
          <tr>
            <td className={classes.infoPart1}>Free shipping on purchases over 50$</td>
          </tr>
          <tr>
            <td className={classes.infoPart1}>Delivery times are up to 5-14 business <br />days from the moment of ordering.</td>
          </tr> */}