import React, { useState } from 'react';
import './styles.css';

const ProductItem = ({ product, addToCart }) => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetailsVisibility = () => {
        setIsDetailsVisible(prevState => !prevState);
    };

    const addProductToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-item" onMouseEnter={toggleDetailsVisibility} onMouseLeave={toggleDetailsVisibility}>
            <img src={product.image} alt={product.name} style={{ width: '250px', height: '250px' }} />
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button onClick={addProductToCart}>Add to Cart</button>
            {isDetailsVisible && <p className="product-details">{product.description}</p>}
        </div>
    );
};

export default ProductItem;
