import React, { useContext } from 'react';
import styles from './styles.module.css';
import Products from "../../data/products";
import { CartContext } from '../../pages/Cart/CartContext';

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const id = window.location.href.split("?id=")[1];
  const product = Products.items.filter((item) => item.id == id)[0];
  console.log(product);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product Details</h2>
      <img
        src={product.image}
        alt="Product"
        className={styles.productImage}
      />
      <div className={styles.details}>
        <div className={styles.label}>Nome:</div>
        <div className={styles.value}>{product.title}</div>
      </div>
      <div className={styles.details}>
        <div className={styles.label}>Descrição:</div>
        <div className={styles.value}>
        {product.description}
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.label}>Preço:</div>
        <div className={styles.value}>R$ {product.price}</div>
      </div>
      <div className={styles.details}>
        <div className={styles.label}>Quantidade:</div>
        <div className={styles.value}>{product.quantity}</div>
      </div>
      <input
        type="button"
        className={styles.botao_grande}
        value="Adicionar ao carrinho"
        onClick={() => addToCart(product)}
      />
    </div>
  );
};

export default ProductDetail;
