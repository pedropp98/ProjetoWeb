import CardPessoa from "./CardPessoa/Card";
import marcelo from "../../assets/pessoas/marcelo.webp";
import linda from "../../assets/pessoas/linda.webp";
import tipa from "../../assets/pessoas/tipa.webp";

import style from './styles.module.css';

import background from '../../assets/wallpaperPessoas.jpg';

const SectionCards = () => {
    return (
        <section className={style.clientes} style={{ backgroundImage: `url(${background})` }}>
            <CardPessoa nome="Marcel" imagem={marcelo} review="Encontrei umas paradas maneiras pra minha cacatua. Esse site é o Bixo! tem tudo mesmo" />
            <CardPessoa nome="Linda" imagem={linda} review="Tudo que minha arara azul chamada blue precisa tem aqui! Só
                compro com Ibama daqui pra frente." />
            <CardPessoa nome="Tipa" imagem={tipa} review="Achei que só existiam duas raças de animais que eu pudesse ter,
                mas com o Ibama, descobri que existem mais que cinco!" />
        </section>
    );
}

export default SectionCards;
