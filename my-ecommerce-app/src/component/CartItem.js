import React from 'react';
import './styles.css';


// This component represents a single cart item in the shopping cart.
const CartItem = ({ item, removeFromCart }) => {
    // Destructuring to extract necessary properties from the item.
    const { name, price, quantity, image } = item;

    // Calculating the total price for this item (unit price * quantity).
    const totalPrice = (price * quantity).toFixed(2);

    // Function to handle the removal of an item from the cart.
    // If the quantity is 1, it will remove the item entirely.
    const handleRemoveClick = () => {
        removeFromCart(item.id, quantity === 1);
    };

    // Render the cart item.
    return (
        <div className="item">
            {/* Displaying the image of the item */}
            <img src={image} alt={name} className="image" />

            {/* Container for the item details */}
            <div className="details">
                {/* Displaying the name of the product */}
                <p className="name">{name}</p>

                {/* Displaying the price of the product */}
                <p className="price">Price: ${price}</p>

                {/* Displaying the quantity of the product */}
                <p className="quantity">Quantity: {quantity}</p>

                {/* Displaying the total price for this item */}
                <p className="total">Total: ${totalPrice}</p>

                {/* Button to remove the item from the cart */}
                <button className="remove-button" onClick={handleRemoveClick}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
