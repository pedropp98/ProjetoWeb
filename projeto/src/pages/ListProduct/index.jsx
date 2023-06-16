import React, { useState } from 'react';
import Product from "../../components/Product";
import Products from "../../data/products";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function ListProduct() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory === 'todos'
    ? Products.items
    : Products.items.filter(product => product.category === selectedCategory);

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
          {filteredProducts.map((product, index) => (
            <Product
              key={index}
              category={product.category}
              src={product.image}
              name={product.name}
              desc={product.description}
              price={product.price}
              button="Ver detalhes"
              link={"../productDetails?id=" + product.id}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
