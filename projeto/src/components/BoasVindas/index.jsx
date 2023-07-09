import React, { useContext, useState, useEffect } from 'react';
import styles from "./styles.module.css";
import Card from "../commons/Card";
import { CartContext } from '../../pages/Cart/CartContext';  
import { Link } from 'react-router-dom';

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const dataFetch = (cb) => {
  const ordersPromise = fetch('http://localhost:3000/order')
    .then((response) => response.json());

  const productsPromise = fetch('http://localhost:3000/product')
    .then((response) => response.json());

  Promise.all([ordersPromise, productsPromise])
    .then(([ordersData, productsData]) => {
      const userId = "41224d776a326fb40f000001"; // Replace with the current user's ID

      // Step 2: Filter the orders from the current user
      const userOrders = ordersData.filter(order => order.client === userId);
      console.log(userOrders)

      // Step 3: Pickup all the products in the orders (list of product IDs)
      const productIds = userOrders.flatMap(order => order.products.map(product => product.id)).filter(onlyUnique);
      console.log(productIds)
      // Step 4: Filter the products by ID
      const filteredProducts = productsData.products.filter(product => productIds.includes(product._id));
      console.log(filteredProducts)

      // Step 5: Pickup the products' categories
      const categories = filteredProducts.map(product => product.category);
      console.log(categories)

      // Step 6: Pickup the category that appears the most
      const categoryCount = {};
      let mostCommonCategory = null;
      let maxCount = 0;
      categories.forEach(category => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
        if (categoryCount[category] > maxCount) {
          maxCount = categoryCount[category];
          mostCommonCategory = category;
        }
      });
      console.log(mostCommonCategory);

      // Step 7: Fetch all products from localhost:3000/product
      const fetchedProducts = productsData.products;

      // Step 8: Filter maximum 3 products from the most common category
      const filteredRecommendedProducts = fetchedProducts.filter(product => product.category === mostCommonCategory).slice(0, 3);
      console.log(filteredRecommendedProducts);
      
      let i = 0;
      while(filteredRecommendedProducts.length < 3) {
        if (productsData.products.length > i-1) {
          filteredRecommendedProducts.push(productsData.products[i])
        }
        i++;
      }

      cb(filteredRecommendedProducts);
    })
    .catch(error => {
      console.error('Error:', error);
      cb([]);
    });
};

const BoasVindas = () => {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataFetch((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);
  // Count the occurrences of each category
  // const categoryCounts = {};
  // History.items.forEach((item) => {
  //   const category = item.category;
  //   if (categoryCounts[category]) {
  //     categoryCounts[category]++;
  //   } else {
  //     categoryCounts[category] = 1;
  //   }
  // });

  // // Find the most recurrent category
  // let mostRecurrentCategory;
  // let maxCount = 0;
  // for (const category in categoryCounts) {
  //   if (categoryCounts[category] > maxCount) {
  //     maxCount = categoryCounts[category];
  //     mostRecurrentCategory = category;
  //   }
  // }

  const Products = products // ProductsRecommend.items.filter((item) => item.category === mostRecurrentCategory).slice(0, 3);
  
  return (
    <div className={styles.recepcao}>
      <Card>
        <div className={styles.firstCard}>
          <h4>Bem-vindo ao Ibama!</h4>
          <p>
            Desejamos que consiga encontrar <b> tudo</b> que estiver à procura
          </p>
          <div className={styles.botoes}>
          <Link to="./loginClient" className={styles.botao_grande}>Fazer Login</Link>
          <Link to="./createCostumer" className={styles.botao_grande}>Criar Conta</Link>
          </div>
        </div>
      </Card>

      <div className={styles.sugestoes}>
        <h4>Produtos escolhidos para você!</h4>
        <div className={styles.produtos}>
          {Products.map((product) => (
            <Card key={product._id}>
              <img src={product.image} alt={product.title} className={styles.img}/>
              <div>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <input
                type="button"
                className={styles.botao_grande}
                value="Adicionar ao carrinho"
                onClick={() => addToCart(product)}
              />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoasVindas;
