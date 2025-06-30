// src/App.jsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 


import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile'; 
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    
    <BrowserRouter>
      <Navbar /> {/* Navbar siempre visible */}
      <Routes> {/* Define las rutas de la aplicación [cite: 17] */}
        <Route path="/" element={<Home />} /> {/* Ruta para Home [cite: 18] */}
        <Route path="/register" element={<Register />} /> {/* Ruta para Register [cite: 21] */}
        <Route path="/login" element={<Login />} /> {/* Ruta para Login [cite: 22] */}
        <Route path="/cart" element={<Cart />} /> {/* Ruta para Cart [cite: 23] */}
        <Route path="/pizza/p001" element={<Pizza />} /> {/* Ruta para Pizza (ID fijo por ahora) [cite: 24] */}
        <Route path="/profile" element={<Profile />} /> {/* Ruta para Profile [cite: 25] */}
        <Route path="*" element={<NotFound />} /> {/* Ruta para NotFound (cualquier otra ruta) [cite: 25, 26] */}
      </Routes>
      <Footer /> {/* Footer siempre visible */}
    </BrowserRouter>
  );
}

export default App;
