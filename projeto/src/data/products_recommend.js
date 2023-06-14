import tucano from "../assets/produtos/tucano.png";
import racao from "../assets/produtos/racao.webp";
import racaoGalinha from "../assets/produtos/racaoGalinha.jpg";
import racaoGato from "../assets/produtos/racaoGato.png";
import racaoCoelho from "../assets/produtos/racaoCoelho.webp";

const ProductsRecommend = {
  items: [
    {
      image: racao,
      title: "Ração para pitbull",
      description: "Ideal para o seu amigo Thor de 39kgs",
      price: "R$ 25,80",
      category: "racao"
    },
    {
      image: racaoGato,
      title: "Ração para Gato",
      description: "Wiskas sache",
      price: "R$ 25,80",
      category: "racao"
    },
    {
      image: racaoCoelho,
      title: "Ração de Coelho",
      description: "1kd de ração de coelho",
      price: "R$ 80,00",
      category: "racao"
    },
    {
      image: racaoGalinha,
      title: "Ração para Galinha",
      description: "1 kg de milho",
      price: "R$ 25,80",
      category: "racao"
    },
    {
      image: tucano,
      title: "Tucano de brinquedo",
      description: "Belo e exótico",
      price: "R$ 80,00",
      category: "brinquedo"
    }
  ],
};

export default ProductsRecommend;
