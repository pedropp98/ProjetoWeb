import React from "react";
import styles from "./styles.module.css";
import Card from "../commons/Card";
import Button from "../commons/Button";

import Products from "../../data/products";

const BoasVindas = () => {
  return (
    <div className={styles.recepcao}>
      <Card>
        <div className={styles.firstCard}>
          <h4>Bem-vindo ao Ibama!</h4>
          <p>
            Desejamos que consiga encontrar <b> tudo</b> que estiver à procura
          </p>
          <div className={styles.botoes}>
            <Button>Fazer login</Button>
            <Button>Criar conta</Button>
          </div>
        </div>
      </Card>

      <div className={styles.sugestoes}>
        <h4>Produtos escolhidos para você!</h4>
        <div className={styles.produtos}>
          {Products.items.map((product, index) => (
            <Card key={index}>
              <img src={product.image} alt={product.title} className={styles.img}/>
              <div>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <Button>Comprar!</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoasVindas;
