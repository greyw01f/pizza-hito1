import React, { useContext } from 'react'; // Importa useContext
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContext'; // Importa el CartContext

const Cart = () => {
  // Consume el contexto del carrito para obtener el carrito, las funciones y el total
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  const handlePay = () => {
    // Este botón no hace nada por ahora, según los requisitos
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
                        <span className="fw-bold me-2">{item.count}</span>
                        <button className="btn btn-success btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card-footer text-end">
              {/* El total ahora viene directamente del contexto */}
              <h3>Total: ${total.toLocaleString('es-CL', { minimumFractionDigits: 0 })}</h3>
              <button className="btn btn-dark mt-3" onClick={handlePay}>Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
