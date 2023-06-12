import CardPessoa from "./CardPessoa/Card";
import marcelo from "../../assets/pessoas/marcelo.webp";
import style from './styles.module.css';

import background from '../../assets/wallpaperPessoas.jpg';

const SectionCards = () => {
    return (
        <section className={style.clientes} style={{ backgroundImage: `url(${background})` }}>
            <CardPessoa nome="Marcel" imagem={marcelo} review="lorem ipsum sit dolor amet" />
            <CardPessoa nome="Marcel" imagem={marcelo} review="lorem ipsum sit dolor amet" />
            <CardPessoa nome="Marcel" imagem={marcelo} review="lorem ipsum sit dolor amet" />
        </section>
    );
}

export default SectionCards;
