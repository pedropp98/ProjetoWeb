import React from "react";
import styles from "./styles.module.css";
import Card from "../commons/Card";
import Button from "../commons/Button";

import History from "../../data/history";
import ProductsRecommend from "../../data/products_recommend";

const BoasVindas = () => {

  // Count the occurrences of each category
  const categoryCounts = {};
  History.items.forEach((item) => {
    const category = item.category;
    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  });

  // Find the most recurrent category
  let mostRecurrentCategory;
  let maxCount = 0;
  for (const category in categoryCounts) {
    if (categoryCounts[category] > maxCount) {
      maxCount = categoryCounts[category];
      mostRecurrentCategory = category;
    }
  }

  const Products = ProductsRecommend.items.filter((item) => item.category === mostRecurrentCategory).slice(0, 3);
  
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
          {Products.map((product, index) => (
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
