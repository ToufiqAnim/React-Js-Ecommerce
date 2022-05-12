import React from 'react';
import ProductsCollection from '../ProductsCollection/ProductsCollection';
import './ProductPreview.styles.scss';

const ProductPreview = ({product}) => {
    const {title,items} = product;
    return (
        <div className='product-preview'>
           <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
          items.filter((item, idx) => idx<4).map(({id, ...otherItemsProps}) =>(
              <ProductsCollection key={id} {...otherItemsProps}/>
          ))
      }
    </div>  
        </div>
    );
};

export default ProductPreview;