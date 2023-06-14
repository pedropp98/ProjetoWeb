import React from 'react';
import styles from './styles.module.css';
import ProductDetailsCart from '../../components/ProductDetailCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Carrinho</h1>
        <ProductDetailsCart />
        <ProductDetailsCart />
        <div className={styles.deliveryAddress}>
          <div className={styles.label}>Endereço de entrega:</div>
          <div className={styles.value}>Dr carlos de camargo salles, 10, Jardim Lutfalla</div>
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
          <Link className={styles.link} to="../searchProducts"><button className={`${styles.button} ${styles.buyButton}`}>Finalizar compra</button></Link>
          <Link className={styles.link} to="../searchProducts"><button className={`${styles.button} ${styles.continueButton}`}>Continuar comprando</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
