import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

const ProductList = ({ addToCart }) => {
    const renderProductItems = () => {
        return productsData.map(product => (
            <ProductItem 
                key={product.id} 
                product={product} 
                onAddToCart={() => addToCart(product)} 
            />
        ));
    };

    return <div className="product-list">{renderProductItems()}</div>;
};

export default ProductList;

