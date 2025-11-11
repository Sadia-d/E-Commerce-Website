import { useState } from 'react';
import { AppContext } from './AppContext';

const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "Rahim", age: 20 })


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };


  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);


  const handleDressData = (dress) => {
    console.log('giit this', dress)
  }

  const userInfo = {
      user,
    setUser,
    handleDressData,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cart, 
  }

  return (
    <AppContext.Provider value={userInfo}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;