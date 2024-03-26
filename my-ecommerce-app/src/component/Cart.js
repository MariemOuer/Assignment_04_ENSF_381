import React from 'react';
import CartItem from './CartItem'; // Importing the CartItem component

// Cart component
const Cart = ({ cartItems, updateCartQuantity, removeFromCart }) => {

  // Function to handle quantity change for cart items
  const changeQuantity = (productId, isIncrement) => {
    const targetItem = cartItems.find(item => item.id === productId);
    if (!targetItem) return;

    // Calculate updated quantity based on whether it's an increment or decrement
    const updatedQuantity = isIncrement ? targetItem.quantity + 1 : targetItem.quantity - 1;
    if (updatedQuantity > 0) {
      updateCartQuantity(productId, updatedQuantity); // Update quantity in the cart
    } else {
      removeFromCart(productId); // Remove item from cart if quantity becomes zero
    }
  };

  // Function to calculate total price of items in the cart
  const cartCalculateTotal = () => cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  // Function to render cart items
  const cartItemsRender = () => cartItems.map(item => (
    <CartItem
      key={item.id}
      item={item}
      removeFromCart={removeFromCart} // Pass removeFromCart function to CartItem
      onDecrease={() => changeQuantity(item.id, false)} // Decrease quantity event handler
      onIncrease={() => changeQuantity(item.id, true)} // Increase quantity event handler
    />
  ));

  // Render the Cart component
  return (
    <div className="cart" style={cartStyle}>
      <h2 className="cart-heading">Shopping Cart</h2>
      {cartItems.length === 0 ? <p className="cart-empty-message">Your cart is empty</p> : 
      <>
        {cartItemsRender()}
        <div className="cart-total">
          <strong>Total: </strong>${cartCalculateTotal()}
        </div>
      </>}
    </div>
  );
};

// Styles for the cart component
const cartStyle = {
  width: '30%', 
  padding: '1rem', 
  marginLeft: 'auto', 
  position: 'absolute', 
  right: '0', 
  top: '6rem', 
  fontSize: '25px', 
  marginBottom: '1rem', 
  textAlign: 'left'
};

export default Cart; // Exporting the Cart component
