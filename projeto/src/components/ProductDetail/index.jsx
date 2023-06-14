import React from 'react';
import styles from './styles.module.css';

const ProductDetail = (product) => {
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
        <div className={styles.value}>{product.name}</div>
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
      <div className={styles.details}>
       <input type="button" className={styles.botao_grande} value="Adicionar ao carrinho" />
      </div>
    </div>
  );
};

export default ProductDetail;
