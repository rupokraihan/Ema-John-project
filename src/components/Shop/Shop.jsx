import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))


  }, [])
  return (
    <div className='shop-container'>
      <div className="products-container">
        <h1>hello products : {products.length }</h1>

      </div>
      <div className="cart-container">
        <h3>summary</h3>

      </div>
    </div>
  );
};

export default Shop;