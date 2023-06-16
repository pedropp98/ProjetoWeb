import CardAdmin from "../../components/CardAdmin";
import admin_img from "../../assets/admin.png"
import editar_img from "../../assets/editar.png"
import produtos_img from "../../assets/produtos.png"

import styles from "./styles.module.css";

function Admin() {
  return (
    <>
       <main>
        <div class={styles.main + ' ' + styles.conteudo + ' ' + styles.padding_padrao}>
          <div>
            <div class={styles.admin_title}>
              <h1>Olá, Administrador</h1>
              <p>
                Escolha a opção que deseja.
              </p>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
          <div class={styles.row_padding + ' ' +  styles.center}>
          <CardAdmin name="Cadastrar Administradores" desc="Adicione novos administradores ao seu sistema!" src={admin_img} button="Cadastrar" link="../createAdmin"/>
          <CardAdmin name="Editar cadastro" desc="Edite os seus dados pessoais informados no cadastro!" src={editar_img} button="Editar" link="../editAdmin"/> 
          <CardAdmin name="Ver Produtos" desc="Veja e edite e cadastre os produtos do sistema!" src={produtos_img} button="Ver Produtos"/> 
          </div>
          </div>
        </main>      
    </>
  );
}

export default Admin;
