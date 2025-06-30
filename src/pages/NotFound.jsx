// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la redirección [cite: 27]
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">¡Oops! La página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary mt-3">Volver al Inicio</Link> {/* Redirige a la ruta "/" [cite: 27] */}
    </div>
  );
};

export default NotFound;
