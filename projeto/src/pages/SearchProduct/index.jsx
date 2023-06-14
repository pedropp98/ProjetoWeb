import Product from "../../components/Product"

import { Link } from "react-router-dom";

import styles from "./styles.module.css"

import { useEffect, useState } from "react";

import img1 from "../../assets/produtos/racaoGato.png"
import img2 from "../../assets/produtos/aparador.webp"

const dataFetch = (cb) => {
  const data = fetch('http://localhost:3000/product')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);
      cb(data.products)
    });
};

function ListProduct() {

  const [produtos, setProdutos] = useState(['test']);

  useEffect(() => {
    dataFetch((data)=>{setProdutos(data)});
  }, []);

  return (
    <>
      <div>
        <div className={styles.products_title}>
          <h1>Conheça nossos produtos</h1>
          <p>
            Temos vários itens interessantes para o seu pet! Não deixe de
            conferir!
          </p>
        </div>
      </div>

      <div className={styles.filter_container + ' ' + styles.select_filter}>
        <label htmlFor="products-filter">Filtrar por:</label>
        <select id="products-filter">
          <option value="todos">Todos</option>
          <option value="racao">Ração</option>
          <option value="coleira">Coleira</option>
          <option value="brinquedo">Brinquedo</option>
        </select>
      </div>

      <div
        className={styles.main + ' ' + styles.conteudo + ' ' + styles.padding_padrao}>
        <div class={styles.row_padding + ' ' + styles.center}>
          {/* PRODUTOS */}

          {produtos.map((produto) => {
            return (
              <Product category={produto.category} src={produto.image} name={produto.name} desc={produto.description} price={produto.price} button="Ver detalhes" link="../productDetails" />
            )
          })}

        </div>
      </div>
    </>
  );
}

export default ListProduct;
