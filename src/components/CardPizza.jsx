import React, { useContext } from 'react';
import './CardPizza.css';
import { CartContext } from '../context/CartContext'; // Importa el CartContext

const CardPizza = ({ name, price, ingredients, img, id }) => { // Asegúrate de recibir el 'id'
  const formattedPrice = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });

  // Consume el contexto del carrito para obtener la función addToCart
  const { addToCart } = useContext(CartContext);

  // Función para manejar el clic del botón "Añadir"
  const handleAddToCart = () => {
    // Pasa toda la información necesaria de la pizza a la función addToCart
    addToCart({ id, name, price, img });
    alert(`${name} añadida al carrito!`); // Mensaje de confirmación
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
          <button className="btn btn-primary">Ver Más</button>
          {/* Asigna la función handleAddToCart al botón "Añadir" */}
          <button className="btn btn-success" onClick={handleAddToCart}>Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
