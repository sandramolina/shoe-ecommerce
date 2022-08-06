import React from 'react';

import { useSelector } from 'react-redux';

import Product from './Product';

const ProductGrid = () => {
  const productsToShow = useSelector((state) => state.productsState.products);

  const productNodes = productsToShow.map((product) => (
    <Product product={product} key={product.id} />
  ));

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
