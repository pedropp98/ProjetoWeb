import React, { useState } from 'react';
import styles from './styles.module.css';
const productImg = '/src/assets/produtos/onca.jfif'

const ProductForm = (props) => {
  const [productImage, setProductImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const productData = {
        name: name,
        description: description,
        price: price,
        amount: amount,
        category: category,
        image: productImg,
      };

      const body = JSON.stringify(productData);

      const response = await fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (response.ok) {
        alert('Produto cadastrado com sucesso!');
        window.location.href = "../adminProducts"
        // Handle success, e.g., show a success message or redirect to another page
      } else {
        alert('Ocorreu um erro, tente novamente');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Ocorreu um erro, tente novamente');
    }
  };

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
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Preço:</label>
          <input
            type="text"
            id="price"
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="amount">Quantidade:</label>
          <input
            type="number"
            id="amount"
            className={styles.input}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Categoria:</label>
          <select
            id="category"
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required>
            <option value="">Selecione a categoria</option>
            <option value="racao">Ração</option>
            <option value="brinquedo">Brinquedo</option>
            <option value="outros">Outros</option>
          </select>
        </div>


        <div className={styles.formGroup}>
          <label htmlFor="productImage">Imagem do Produto:</label>
          <input
            type="file"
            id="productImage"
            className={styles.input}
            src={productImage}
            onChange={handleImageChange}
          />
        </div>

        <div className={styles.productImageContainer}>
          {productImage && <img src={productImage} alt="Product" className={styles.productImage} />}
        </div>

        <div className={styles.formGroup}>
          <button type="submit" className={`${styles.botao_grande} ${styles.buyButton}`}>
            {props.button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
