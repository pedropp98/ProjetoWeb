import React from 'react';
import styles from './styles.module.css';

const ProductDetailCart = (product) => {
  return (
    <div className={styles.container}>
      <img
        src="https://i.pinimg.com/originals/7e/d4/6c/7ed46c55250a58a93008d25641ec1cec.jpg"
        alt="Product"
        className={styles.productImage}
      />
      <div className={styles.details}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>R$ {product.price}</div>
        <div className={styles.quantity}>Amount: {product.amount}</div>
      </div>
    </div>
  );
};

export default ProductDetailCart;
