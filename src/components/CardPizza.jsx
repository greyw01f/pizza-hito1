import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CardPizza.css';
import { CartContext } from '../context/CartContext';

const CardPizza = ({ name, price, ingredients, img, id }) => {
  const formattedPrice = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price, img });
    alert(`${name} añadida al carrito!`);
  };

  return (
    <div className="card pizza-card">
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
        <div className="d-flex justify-content-between">
          <Link to={`/pizza/${id}`} className="btn btn-primary">Ver Más</Link>
          <button className="btn btn-success" onClick={handleAddToCart}>Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
