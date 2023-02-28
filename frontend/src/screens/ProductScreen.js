import React from 'react'

import Rating from '../components/Rating';
import data from '../data';
import { Link, useParams } from "react-router-dom";

export default function ProductScreen(props) {
    const { id } = useParams();
    const product = data.products.find((x) => x._id === id);
    if(!product){
        return <div>Product Not Found</div>
    }
  return (
    <div>
        <h1><Link to="/">Back to result</Link></h1>
      <div className='row top'>
        <div className='col-2'>
        <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className='col-1'>
<ul>
    <li>
        <h1>{product.name}</h1>
    </li>
    <li>
        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
    </li>
    <li>
        Size: {product.size};
    </li>
    <li>
        Price: ${product.price}
    </li>
    <li>
        Description: {product.description};
    </li>
</ul>
        </div>
        <div className='col-1'>
         <div className='card card-body'>
            <ul>
                <li>
                    <div className='row'>
                        <div>Price</div>
                        <div className='price'>${product.price}</div>
                    </div>
                </li>
                <li>
                    <div className='row'>
                        <div>Status</div>
                        <div>
                        {product.countInStock>0? 
                        (<span className="success"> In Stock </span>):(
                        <span className='error'>Unavailable</span>)}
                        </div>
                    </div>
                </li>
                <li>
                    <button className='primary block'>Add to Cart</button>
                </li>
            </ul>
         </div>
        </div>
      </div>
    </div>
  )
}
