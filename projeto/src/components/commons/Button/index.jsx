import React from "react";
import styles from "./styles.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.botao} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
