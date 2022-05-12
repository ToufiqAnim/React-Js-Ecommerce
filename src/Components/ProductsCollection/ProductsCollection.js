import React from 'react';

import './Products.styles.scss';

const ProductsCollection = ({ id, name, price, imageUrl }) => (
  <div className='products'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='products-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default ProductsCollection;