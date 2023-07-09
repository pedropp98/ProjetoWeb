import React, { useState, useEffect } from 'react';
import Product from "../../components/Product";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const dataFetch = (cb) => {
  const data = fetch('http://localhost:3000/product')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);
      cb(data.products);
    });
};

function ListProduct() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataFetch((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.items.filter(product => product.category === selectedCategory);

  return (
    <>
      <div>
        <div className={styles.products_title}>
          <h1>Produtos</h1>
          <p>
            Veja e edite produtos ja cadastrados,alem de cadastrar novos produtos!
          </p>
      
          <Link to="../createProduct"><input type="button" className={styles.botao_grande} value="Cadastrar novo produto" /></Link>
        </div>
      </div>

      <div className={styles.filter_container + ' ' + styles.select_filter}>
        <label htmlFor="products-filter">Filtrar por:</label>
        <select id="products-filter" value={selectedCategory} onChange={handleFilterChange}>
          <option value="todos">Todos</option>
          <option value="racao">Ração</option>
          <option value="brinquedo">Brinquedo</option>
          <option value="outros">Outros</option>
        </select>
      </div>

      <div
        className={styles.main + ' ' + styles.conteudo + ' ' + styles.padding_padrao}>
        <div class={styles.row_padding + ' ' +  styles.center}>
          {/* PRODUTOS */}
          <div className={styles.row_padding + ' ' + styles.center}>
          {/* PRODUTOS */}
          {filteredProducts.map((product) => (
            <Product
              key={product._id}
              category={product.category}
              src={product.image}
              name={product.name}
              desc={product.description}
              price={product.price}
              button="Editar"
              link={"../editProduct?id=" + product._id}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
