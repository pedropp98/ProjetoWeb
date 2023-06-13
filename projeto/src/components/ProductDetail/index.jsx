import React from 'react';
import styles from './styles.module.css';

const ProductDetail = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product Details</h2>
      <img
        src="https://i.pinimg.com/originals/7e/d4/6c/7ed46c55250a58a93008d25641ec1cec.jpg"
        alt="Product"
        className={styles.productImage}
      />
      <div className={styles.details}>
        <div className={styles.label}>Nome:</div>
        <div className={styles.value}>Caracol</div>
      </div>
      <div className={styles.details}>
        <div className={styles.label}>Descrição:</div>
        <div className={styles.value}>
          Imortal. Vai te perseguir pro resto da vida.
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.label}>Preço:</div>
        <div className={styles.value}>$-10M</div>
      </div>
      <div className={styles.details}>
        <div className={styles.label}>Quantidade:</div>
        <div className={styles.value}>1</div>
      </div>
      <div className={styles.details}>
       <input type="button" className={styles.botao_grande} value="Adicionar ao carrinho" />
      </div>
    </div>
  );
};

export default ProductDetail;
