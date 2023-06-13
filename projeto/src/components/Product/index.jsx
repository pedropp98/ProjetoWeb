import React from "react";

import styles from "./styles.module.css";

function Product(props) {
  return (
    <div class="quarter product" data-category={props.category}>
      <img
          className={styles.product_img}
          src={props.src}
        />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      <div class="div_botao_comprar">
        <span class="card_price">R$ {props.price}</span>
        <br />
        <input type="button" className="botao_comprar" value={props.button} />
      </div>
    </div>
  );
}

export default Product;
