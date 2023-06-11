import React from "react";
import style from "./styles.module.css";

function Card({ title, children }) {
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;
