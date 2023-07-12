import React from "react";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

import noImage from "../../assets/no-image-icon.png";

function Product(props) {
  return (
    <div className={styles.quarter + ' ' + styles.product} data-category={props.category}>
      <img
          className={styles.product_img}
          src={props.src}
          onError={(e) => {(e.target.src !== noImage) ? e.target.src = noImage : '' }}
        />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <p><b>Categoria:</b> {props.category}</p>
      <div className={styles.div_botao_comprar}>
        <span class="card_price">{props.price}</span>
        <br />
        <Link to={props.link}><input type="button" className={styles.botao_comprar} value={props.button} /></Link>
      </div>
    </div>
  );
}

export default Product;
