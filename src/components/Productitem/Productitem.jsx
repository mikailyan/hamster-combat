import React from 'react';

const ProductItem = ({ item, className }) => {
  return (
    <div className="product-container">
      <div className={'product ' + className}>
        <div className="title">{item.title}</div>
        <div className="low_info">
          <div className="price">
            <button className="price-button">₽{item.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;