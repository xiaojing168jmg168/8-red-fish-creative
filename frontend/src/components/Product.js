import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const { product } = props;
  return (
    <div key={product.slug} className="product">
                  <Link to={`/product/${product.slug}`}>
                   
                    <img className="medium" src={product.image} alt={product.name} />
                  </Link>
                  <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                      <p>{product.name}</p>
                    </Link>
                  
                    <p className="price"><strong>${product.price}</strong></p>
                    <button>Add to cart</button>
                  </div>
                </div>
  )
}
