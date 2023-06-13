import React from 'react';
import styles from './styles.module.css';
import ProductDetailsCart from '../../components/ProductDetailCart';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Cart</h2>
        <ProductDetailsCart />
        <ProductDetailsCart />
        <div className={styles.deliveryAddress}>
          <div className={styles.label}>Delivery Address:</div>
          <div className={styles.value}>123 Main St, City, State, ZIP</div>
        </div>
        <div className={styles.totalPrice}>
          Total Price: $199.98
        </div>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.buyButton}`}>Finalize Buy</button>
          <button className={`${styles.button} ${styles.continueButton}`}>Continue Buying</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
