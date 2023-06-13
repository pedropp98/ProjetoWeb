import React from 'react';
import styles from './styles.module.css';
import ProductDetailsCart from '../../components/ProductDetailCart';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Carrinho</h1>
        <ProductDetailsCart />
        <ProductDetailsCart />
        <div className={styles.deliveryAddress}>
          <div className={styles.label}>Endereço de entrega:</div>
          <div className={styles.value}>123 Main St, City, State, ZIP</div>
        </div>
        <div className={styles.deliveryAddress}>
          <div className={styles.label}>Método de pagamento:</div>
        </div>
        <div className={styles.selectContainer}>
          <select className={styles.select}>
            <option value="credit">Crédito</option>
            <option value="pix">Débito</option>
            <option value="debit">Pix</option>
          </select>
        </div>
        <div className={styles.totalPrice}>
          Total: R$ 199.98
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
