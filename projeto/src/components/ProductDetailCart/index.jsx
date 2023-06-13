import React from 'react';
import styles from './styles.module.css';

const ProductDetailCart = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://example.com/product-image.jpg"
        alt="Product"
        className={styles.productImage}
      />
      <div className={styles.details}>
        <div className={styles.name}>Product Name</div>
        <div className={styles.price}>$99.99</div>
        <div className={styles.quantity}>Quantity: 2</div>
      </div>
    </div>
  );
};

export default ProductDetailCart;
