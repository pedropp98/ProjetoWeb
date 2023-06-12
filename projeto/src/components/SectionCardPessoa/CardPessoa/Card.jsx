import style from './styles.module.css';

const CardPessoa = (props) => {
    return (
        <div className={style.card} >
            <img src={props.imagem} alt={props.nome} />
            <div>
                <h3>{props.nome}</h3>
                <q>{props.review}</q>
            </div>
        </div>
    );
}

export default CardPessoa;