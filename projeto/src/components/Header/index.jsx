import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/iBama.jpg";
import {
  faShieldDog,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function Header() {
  return (
    <header id={styles.header}>
      <Link to='/'>
        <figure>
          <img src={logo} alt="ibamaLogo" />
        </figure>
      </Link>
      <div id={styles.busca}>
        <input type="text" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>

      <div id={styles.menuSuperior}>
        <Link to='/editCostumer'>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <a>Ver Perfil</a>
          </div>
        </Link>
      </div>
      {/* <Link to="./cart"><FontAwesomeIcon icon={faCartShopping} /></Link> */}
      <nav>
        <ul>
          <li>
            <a>
              <FontAwesomeIcon icon={faShieldDog} /> Categorias
            </a>
          </li>
          <li>
            <a>Promoções</a>
          </li>
          <li>
            <a>Descontos</a>
          </li>
          <li>
            <a>Silvestres</a>
          </li>
          <li>
            <a>Rações</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
