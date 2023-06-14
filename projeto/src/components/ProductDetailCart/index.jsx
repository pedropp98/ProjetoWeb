import React, { useContext } from 'react';
import styles from './styles.module.css';
import { CartContext } from '../../pages/Cart/CartContext';

const ProductDetailCart = ({ product, onRemove, onIncreaseAmount, onDecreaseAmount }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.container}>
      <img src={product.image} alt="Product" className={styles.productImage} />
      <div className={styles.details}>
        <div className={styles.name}>{product.title}</div>
        <div className={styles.price}>R$ {product.price}</div>
        <div className={styles.quantity}>
          <button onClick={onDecreaseAmount} className={styles.decreaseButton}>
            -
          </button>
          <button onClick={onIncreaseAmount} className={styles.decreaseButton}>
            +
          </button>
          Amount: {product.quantity}
        </div>
        <button onClick={onRemove} className={styles.removeButton}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCart;
