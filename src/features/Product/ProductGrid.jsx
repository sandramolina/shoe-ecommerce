import React from 'react';

const ProductGrid = () => {
  return (
    <div className='product-grid'>
      <h1 className='product-title'> Products</h1>
      {productNodes.length !== 0 ? (
        <div className='products'>{productNodes} </div>
      ) : (
        <h3>No products to show</h3>
      )}
    </div>
  );
};

export default ProductGrid;
