import React from 'react';

const Header = () => {
  return (
    <div
      className="text-center text-white py-5" // Bootstrap classes for centering text, white color, and padding
      style={{
        backgroundImage: `url('/Header.jpg')`, // Reference from the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '200px', // Adjust height as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className="display-4">¡Pizzería Mamma Mía!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
  );
};

export default Header;