import aparador from "../assets/produtos/aparador.webp";
import tucano from "../assets/produtos/tucano.png";
import racao from "../assets/produtos/racao.webp";
import peixe from "../assets/produtos/goldfish.png";
import racaoGato from "../assets/produtos/racaoGato.png";

const Products = {
  items: [
    {
      id: 1,
      image: racaoGato,
      title: "Ração de Gato",
      description: "Wiskas sache",
      price: 50.00,
      category: "racao",
      quantity: 100
    },
    {
      id: 2,
      image: racao,
      title: "Ração para pitbull",
      description: "Ideal para o seu amigo Thor de 39kgs",
      price: 25.80,
      category: "racao",
      quantity: 23
    },
    {
      id: 3,
      image: tucano,
      title: "Tucano de brinquedo",
      description: "Belo e exótico",
      price: 80.00,
      category: "brinquedo",
      quantity: 40
    },
    {
      id: 4,
      image: peixe,
      title: "Peixe de aquario",
      description: "Para botar na caixa d'água",
      price: 30.00,
      category: "outros",
      quantity: 50
    },
  ],
};

export default Products;
