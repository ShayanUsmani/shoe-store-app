import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';

function Product() {

    console.log(Shoes)
  return (
    <div className="product">
      <h2>Products</h2>
      <div className="productContainer">
        {Object.keys(Shoes).map(keyName=>{
          const shoe = Shoes[keyName];
          return (<Link key={keyName} className="ProductDev" to={`/product/${keyName}`}> 
              <h3>{shoe.name}</h3>
              <img src={shoe.img} height={500} width={500} alt="shoe" className="imgProduct" />
          </Link>)
        })}
      </div>
    </div>
  );
}

export default Product;
