import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (userEmail, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Error de inicio de sesión' };
      }
    } catch (error) {
      console.error('Error en login:', error);
      return { success: false, message: 'Error de conexión o del servidor' };
    }
  };

  const register = async (userEmail, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Error de registro' };
      }
    } catch (error) {
      console.error('Error en register:', error);
      return { success: false, message: 'Error de conexión o del servidor' };
    }
  };

  const getProfile = async () => {
    if (!token) return null;

    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEmail(data.email);
        return { success: true, email: data.email };
      } else {
        logout();
        return { success: false, message: data.message || 'Token inválido o expirado' };
      }
    } catch (error) {
      console.error('Error al obtener perfil:', error);
      logout();
      return { success: false, message: 'Error de conexión o del servidor' };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    alert('Sesión cerrada.');
  };

  useEffect(() => {
    // Lógica para cargar el token y email desde localStorage si se implementa persistencia
  }, []);

  const contextValue = {
    token,
    email,
    login,
    register,
    logout,
    getProfile,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
