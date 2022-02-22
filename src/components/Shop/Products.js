import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {props.productsData.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;