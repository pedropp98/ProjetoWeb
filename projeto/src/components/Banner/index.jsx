import React from "react";
import styles from "./styles.module.css";
import banner from "../../assets/bannerGuaxinim.jpg";

function Banner() {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className={styles.textoBanner}>
        <h1>Seja bem vindo ao iBama</h1>
        <h2>O lugar onde você pode encontrar de <b>tudo</b> desde ração até um novo pet.</h2>
      </div>
    </div>
  );
}

export default Banner;
