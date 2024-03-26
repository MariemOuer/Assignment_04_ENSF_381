import React, { useState, useEffect } from 'react';
import Header from './Header'; 
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer'; 
import productsData from '../data/products'; 

const ProductPage = () => {
  const [cartItems, setCartItems] = useState(getInitialCartItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function getInitialCartItems() {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  }

  function addToCart(product) {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  function updateCartQuantity(productId, quantity) {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  }

  function removeFromCart(productId) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }

  return (
    <div>
      <Header />
      <main>
        <ProductList products={productsData} onAddToCart={addToCart} />
        <Cart 
          cartItems={cartItems} 
          onUpdateCartQty={updateCartQuantity} 
          onRemoveFromCart={removeFromCart}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
