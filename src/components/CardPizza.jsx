import React from 'react';

import './CardPizza.css'; // Assuming you have a CSS file for styling
// You can also use Bootstrap classes for styling, but here we assume custom styles
const CardPizza = ({ name, price, ingredients, img }) => {
  // Format the price with a thousands separator
  const formattedPrice = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }); // Assuming Chilean Pesos and no decimals as per example

  return (
    <div className="card pizza-card"> {/* You might want to use Bootstrap card classes here */}
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
        <div className="d-flex justify-content-between"> {/* Bootstrap class for aligning buttons */}
          <button className="btn btn-primary">Ver Más</button> {/* No functionality needed for now [cite: 26] */}
          <button className="btn btn-success">Añadir</button> {/* No functionality needed for now [cite: 26] */}
        </div>
      </div>
    </div>
  );
};

export default CardPizza;