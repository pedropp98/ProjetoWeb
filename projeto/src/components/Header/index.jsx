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
      <a href="#">
        <figure>
          <img src={logo} alt="ibamaLogo" />
        </figure>
      </a>
      <div id={styles.busca}>
        <input type="text" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>

      <div id={styles.menuSuperior}>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <a>Área do Cliente</a>
        </div>
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
