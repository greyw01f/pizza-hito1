
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Register = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios.');
      return;
    }

   
    if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres.');
      return;
    }

   
    if (password !== confirmPassword) {
      alert('El password y la confirmación del password deben ser iguales.');
      return;
    }

   
    alert('Registro exitoso!'); 
   
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h2>Registro</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    minLength="6" 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPasswordInput" className="form-label">Confirmar contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPasswordInput"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                    minLength="6" 
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Registrarse</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 