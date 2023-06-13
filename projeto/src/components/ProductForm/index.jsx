import React, { useState } from 'react';
import styles from './styles.module.css';

import { Link } from "react-router-dom";

const ProductForm = (props) => {
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProductImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.title}> {props.title}</h1>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Descrição:</label>
          <textarea id="description" className={styles.textarea}></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Preço:</label>
          <input type="number" id="price" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="quantity">Quantidade:</label>
          <input type="number" id="quantity" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="productImage">Imagem do Produto:</label>
          <input
            type="file"
            id="productImage"
            className={styles.input}
            onChange={handleImageChange}
          />
        </div>

        <div className={styles.productImageContainer}>
          {productImage && (
            <img src={productImage} alt="Product" className={styles.productImage} />
          )}
        </div>

        <div className={styles.formGroup}>
        <Link to="../adminProducts"><input type="submit" className={styles.botao_grande} value={props.button} /></Link>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
