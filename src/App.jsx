import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { CartProvider } from './context/CartContext';
import { UserContext, UserProvider } from './context/UserContext';
import { useContext } from 'react';

const ProtectedRoute = ({ children, requireAuth, redirectIfAuthenticated }) => {
  const { token } = useContext(UserContext);

  if (requireAuth && !token) {
    return <Navigate to="/login" replace />;
  }

  if (redirectIfAuthenticated && token) {
    return <Navigate to="/" replace />;
  }

  return children;
};


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<ProtectedRoute redirectIfAuthenticated={true}><Register /></ProtectedRoute>} />
            <Route path="/login" element={<ProtectedRoute redirectIfAuthenticated={true}><Login /></ProtectedRoute>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<ProtectedRoute requireAuth={true}><Profile /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
