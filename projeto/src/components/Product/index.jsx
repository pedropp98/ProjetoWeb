import React from "react";

function CardAdmin(props) {
  return (
    <div class="quarter product" data-category={props.category}>
      <div class="product-description">
        <img
          class="product-img"
          src={props.src}
          style="width: 100%"
        />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
      <div class="div-botao-comprar">
        <span class="card-price">R$ {props.price}</span>
        <br />
        <input type="button" class="botao-comprar" value="Comprar" />
      </div>
    </div>
  );
}

export default CardAdmin;
