import React, { useContext } from 'react';
import styles from './styles.module.css';
import ProductDetailsCart from '../../components/ProductDetailCart';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {
  const {
    cartItems,
    calculateTotalValue,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    finalizeShopping,
  } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleDecreaseAmount = (productId) => {
    decreaseAmount(productId);
  };

  const handleIncreaseAmount = (productId) => {
    increaseAmount(productId);
  };

  const handleFinalizeShopping = () => {
    finalizeShopping();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Carrinho</h1>
        {/* Render cart items */}
        {cartItems.map((item, index) => (
          <ProductDetailsCart
            key={index}
            product={item}
            onRemove={() => handleRemoveFromCart(item.id)}
            onChangeAmount={(newAmount) => handleChangeAmount(item.id, newAmount)}
            onDecreaseAmount={() => handleDecreaseAmount(item.id)}
            onIncreaseAmount={() => handleIncreaseAmount(item.id)}
          />
        ))}
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
          Total: R$ {calculateTotalValue().toFixed(2)}
        </div>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.buyButton}`} onClick={handleFinalizeShopping}>
            Finalizar compra
          </button>
          <Link className={styles.link} to="../searchProducts">
            <button className={`${styles.button} ${styles.continueButton}`}>
              Continuar comprando
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
