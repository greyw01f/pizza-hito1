// src/components/Pizza.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza details:", error);
        setError("No se pudo cargar la información de la pizza. Asegúrate de que el backend esté funcionando.");
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <p>Cargando detalles de la pizza...</p>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="container mt-5 text-center">
        <p className="alert alert-warning">No se encontraron detalles para esta pizza.</p>
      </div>
    );
  }

  const formattedPrice = pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={pizza.img}
                  className="img-fluid rounded-start"
                  alt={pizza.name}
                  style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h1 className="card-title display-5 mb-3">{pizza.name}</h1>
                  <p className="card-text fs-5">
                    <strong>Precio:</strong> {formattedPrice}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Ingredientes:</strong>
                  </p>
                  <ul className="list-group list-group-flush mb-4">
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index} className="list-group-item px-0">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                  <p className="card-text">
                    <small className="text-muted">{pizza.desc}</small>
                  </p>
                  <div className="mt-4">
                    <button className="btn btn-success btn-lg">Añadir al Carrito</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
