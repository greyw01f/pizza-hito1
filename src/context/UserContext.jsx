import React, { useState } from 'react';
import { UserContext } from './UserContextInstance';

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
    alert('Sesión cerrada.');
  };

  const contextValue = {
    token,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
