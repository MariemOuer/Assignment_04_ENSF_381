import React from 'react';
import ProductItem from './ProductItem'; // Importing the ProductItem component
import productsData from '../data/products'; // Importing product data

// ProductList component takes addToCart function as a prop
const ProductList = ({ addToCart }) => {
    // Function to render individual ProductItem components for each product
    const renderProductItems = () => {
        // Mapping over the product data array and returning a ProductItem component for each product
        return productsData.map(product => (
            <ProductItem 
                key={product.id} // Key is set to product id for React's reconciliation process
                product={product} // Passing product data as a prop to ProductItem
                onAddToCart={() => addToCart(product)} // Callback function to add product to cart
            />
        ));
    };

    // Render the list of ProductItem components
    return <div className="list">{renderProductItems()}</div>;
};

export default ProductList; // Exporting the ProductList component
