import React, { useState, useEffect, useContext } from 'react';
import styles from './styles.module.css';
import { CartContext } from '../../pages/Cart/CartContext';

import noImage from "../../assets/no-image-icon.png";

const dataFetch = (cb) => {
  const id = window.location.href.split("?id=")[1];
  
  const data = fetch('http://localhost:3000/product/' + id)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      cb(data);
    });
};

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);

  const [product, setProducts] = useState([]);

  useEffect(() => {
    dataFetch((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);

  console.log(product);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product Details</h2>
      <img
        src={product.image}
        alt="Product"
        className={styles.productImage}
        onError={(e) => {(e.target.src !== noImage) ? e.target.src = noImage : '' }}

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
        <div className={styles.value}>{product.amount}</div>
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