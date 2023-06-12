import React from "react";

import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function CardAdmin(props) {
  return (
    <div className={styles.third + ' ' + styles.product}>
    <div class="product_description">
      <img class={styles.admin_img} src={props.src} />
      <h3>{props.name}</h3>
      <p>
        {props.desc}
      </p>
    </div>
    <div class={styles.admin_button_div}>
    <Link to={props.link}><input type="button" class={styles.admin_button} value={props.button} /></Link>
      
    </div>
  </div>
  );
}

export default CardAdmin;
