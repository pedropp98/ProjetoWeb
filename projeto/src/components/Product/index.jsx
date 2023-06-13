import React from "react";

import styles from "./styles.module.css";

function Product(props) {
  return (
    <div className={styles.quarter + ' ' + styles.product} data-category={props.category}>
      <img
          className={styles.product_img}
          src={props.src}
        />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      <div className={styles.div_botao_comprar}>
        <span class="card_price">R$ {props.price}</span>
        <br />
        <input type="button" className={styles.botao_comprar} value={props.button} />
      </div>
    </div>
  );
}

export default Product;
