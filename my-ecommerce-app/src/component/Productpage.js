import React, { useState, useEffect } from 'react';
import Header from './Header'; // Importing the Header component
import ProductList from './ProductList'; // Importing the ProductList component
import Cart from './Cart'; // Importing the Cart component
import Footer from './Footer'; // Importing the Footer component
import productsData from '../data/products'; // Importing product data

// ProductPage component
const ProductPage = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState(getInitialCartItems);

  // useEffect to update localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to get initial cart items from localStorage
  function getInitialCartItems() {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  }

  // Function to add a product to the cart
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

  // Function to update quantity of a product in the cart
  function updateCartQuantity(productId, quantity) {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  }

  // Function to remove a product from the cart
  function removeFromCart(productId) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }

  // Render the ProductPage component
  return (
    <div>
      {/* Header component */}
      <Header />
      <main>
        {/* ProductList component */}
        <ProductList products={productsData} addToCart={addToCart} />
        {/* Cart component */}
        <Cart 
          cartItems={cartItems} 
          onUpdateCartQty={updateCartQuantity} 
          removeFromCart={removeFromCart}
        />
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default ProductPage; // Exporting the ProductPage component
