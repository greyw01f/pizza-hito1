import React from 'react';

import './CardPizza.css'; 

const CardPizza = ({ name, price, ingredients, img }) => {

  const formattedPrice = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }); 

  return (
    <div className="card pizza-card"> {}
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </p>
        <p className="card-text">
          <strong>Precio: </strong>{formattedPrice}
        </p>
        <div className="d-flex justify-content-between"> {}
          <button className="btn btn-primary">Ver Más</button> {}
          <button className="btn btn-success">Añadir</button> {}
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
