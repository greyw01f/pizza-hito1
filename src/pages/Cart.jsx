// src/components/Cart.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pizzaCart as initialPizzaCart } from '../pizzas'; 

const Cart = () => {
  
  const [cart, setCart] = useState(initialPizzaCart);

  
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.count, 0);
  };

 
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item 
      )
    );
  };

  
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item 
      ).filter(item => item.count > 0) 
    );
  };

  const handlePay = () => {
    
    alert('Función de pago no implementada aún.');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h2>Detalles del pedido:</h2>
            </div>
            <div className="card-body">
              {cart.length === 0 ? (
                <p className="text-center">El carrito está vacío.</p>
              ) : (
                <ul className="list-group list-group-flush">
                  {cart.map((item) => ( 
                    <li key={item.id} className="list-group-item d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px', marginRight: '15px' }}
                        />
                        <span className="fw-bold me-3">{item.name}</span>
                      </div>
                      <div className="d-flex align-items-center">
                       
                        <span className="me-3">${item.price.toLocaleString('es-CL', { minimumFractionDigits: 0 })}</span>
                        <button className="btn btn-danger btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>-</button> 
                        <span className="fw-bold me-2">{item.count}</span> {/* Use 'count' here */}
                        <button className="btn btn-success btn-sm" onClick={() => increaseQuantity(item.id)}>+</button> 
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card-footer text-end">
              <h3>Total: ${calculateTotal().toLocaleString('es-CL', { minimumFractionDigits: 0 })}</h3> 
              <button className="btn btn-dark mt-3" onClick={handlePay}>Pagar</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;