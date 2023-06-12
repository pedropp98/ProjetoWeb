import CardAdmin from "../../components/CardAdmin";
import admin_img from "../../assets/admin.png"
import editar_img from "../../assets/editar.png"
import produtos_img from "../../assets/produtos.png"

import styles from "./styles.module.css";

function Admin() {
  return (
    <>
      <div>
        <div class="products-title">
          <h1>Conheça nossos produtos</h1>
          <p>
            Temos vários itens interessantes para o seu pet! Não deixe de
            conferir!
          </p>
        </div>
      </div>

      <div class="filter-container select-filter">
        <label for="products-filter">Filtrar por:</label>
        <select id="products-filter">
          <option value="todos">Todos</option>
          <option value="racao">Ração</option>
          <option value="coleira">Coleira</option>
          <option value="brinquedo">Brinquedo</option>
        </select>
      </div>

      <div
        class="main conteudo padding-padrao"
        style="max-width: 1300px; margin-top: 100px">
        <div class="row-padding center">
          

        </div>
      </div>
    </>
  );
}

export default Admin;
