import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const dataFetch = (cb) => {
  const id = window.location.href.split("?id=")[1];
  const data = fetch('http://localhost:3000/product/' + id)
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA", data);
      cb(data);
    });
};

const ProductEdit = (props) => {
  const id = window.location.href.split("?id=")[1];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const [product, setProduct] = useState({});

  useEffect(() => {
    dataFetch((fetchedProduct) => {
      setProduct(fetchedProduct);
      setTitle(fetchedProduct.title);
      setDescription(fetchedProduct.description);
      setPrice(fetchedProduct.price);
      setAmount(fetchedProduct.amount);
      setCategory(fetchedProduct.category);
      setImage(fetchedProduct.image);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const productData = {
        title: title,
        description: description,
        price: price,
        amount: amount,
        category: category,
      };

      const body = JSON.stringify(productData);

      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (response.ok) {
        alert('Product updated successfully!');
        // Handle success, e.g., show a success message or redirect to another page
      } else {
        alert('An error occurred while updating the product. Please try again.');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('An error occurred while updating the product. Please try again.');
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
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
            id="title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            type="number"
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
            required
          >
            <option value="racao">Ração</option>
            <option value="brinquedo">Brinquedo</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">Imagem do Produto:</label>
          <input
            type="file"
            id="image"
            className={styles.input}
            src={image}
            onChange={handleImageChange}
          />
        </div>

        <div className={styles.imageContainer}>
          {image && (
            <img src={image} alt="Product" className={styles.image} />
          )}
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

export default ProductEdit;
