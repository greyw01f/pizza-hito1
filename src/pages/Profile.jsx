// src/pages/Profile.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Se usa Link para el botón de cerrar sesión que eventualmente podría redirigir
import { Link } from 'react-router-dom';

const Profile = () => {
  // El email y el botón son estáticos por ahora, según el requerimiento. [cite: 28, 29]
  const userEmail = "usuario@ejemplo.com";

  const handleLogout = () => {
    alert("Función de cerrar sesión no implementada aún.");
    // En futuros hitos se implementará la lógica de autenticación real. [cite: 29]
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h2>Perfil de Usuario</h2>
            </div>
            <div className="card-body text-center">
              <p className="lead">Email: <strong>{userEmail}</strong></p>
              <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;