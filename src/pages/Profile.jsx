import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { email, logout, getProfile, token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token && !email) {
      getProfile();
    }
  }, [token, email, getProfile]);

  const handleLogout = () => {
    logout();
    navigate('/login');
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
              {email ? (
                <p className="lead">Email: <strong>{email}</strong></p>
              ) : (
                <p className="lead">Cargando email...</p>
              )}
              <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
