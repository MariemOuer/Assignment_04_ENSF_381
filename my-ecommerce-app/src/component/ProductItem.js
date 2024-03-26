import React, { useState } from 'react';
import './styles.css';

// ProductItem component takes two props: product and addToCart function
const ProductItem = ({ product, addToCart }) => {
    // State to track whether product details are visible or not
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    // Function to toggle visibility of product details
    const toggleDetailsVisibility = () => {
        setIsDetailsVisible(prevState => !prevState);
    };

    // Function to add the product to the cart
    const addProductToCart = () => {
        addToCart(product);
    };

    return (
        <div className="item" onMouseEnter={toggleDetailsVisibility} onMouseLeave={toggleDetailsVisibility}>
            {/* Display product image */}
            <img src={product.image} alt={product.name} style={{ width: '250px', height: '250px' }} />
            {/* Display product name */}
            <p>{product.name}</p>
            {/* Display product price */}
            <p>Price: ${product.price}</p>
            {/* Button to add product to cart */}
            <button onClick={addProductToCart}>Add to Cart</button>
            {/* Display product description if details are visible */}
            {isDetailsVisible && <p className="product">{product.description}</p>}
        </div>
    );
};

export default ProductItem;
