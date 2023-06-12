import React from "react";
import gptw from "../../assets/gptw.png";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.footer_container}>
        <div class={styles.footer_item}>
          <h4>Contato</h4>
          <ul>
            <li>Email: ibamacontato@gmail.com</li>
            <li>Telefone: (12) 97402-9857</li>
            <li>Endereço: Av. Trab. São Carlense, 400, 13566-590</li>
          </ul>
        </div>
         <div class={styles.footer_item}>
          <h4>Nossa Equipe</h4>
          <ul>
            <li>Linda</li>
            <li>Marcelo</li>
            <li>Tipa</li>
          </ul>
        </div>
         <div class={styles.footer_item}>
          <h4>Navegue</h4>
          <ul>
            <li>Home Page</li>
            <li>Login</li>
            <li>Registrar</li>
          </ul>
        </div>
         <div class={styles.footer_item}>
          <img class={styles.img_gptw} src={gptw} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
