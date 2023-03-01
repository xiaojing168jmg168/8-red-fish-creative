import React, { useEffect, useReducer } from 'react'

import Rating from '../components/Rating';

import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { Helmet } from 'react-helmet-async';

// export default function ProductScreen(props) {
//     const { id } = useParams();
//     const product = data.products.find((x) => x._id === id);
//     if(!product){
//         return <div>Product Not Found</div>
//     }
//   return (
//     <div>
//         <h1><Link to="/">Back to result</Link></h1>
//       <div className='row top'>
//         <div className='col-2'>
//         <img className="large" src={product.image} alt={product.name}></img>
//         </div>
//         <div className='col-1'>
// <ul>
//     <li>
//         <h1>{product.name}</h1>
//     </li>
//     <li>
//         <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
//     </li>
//     <li>
//         Size: {product.size};
//     </li>
//     <li>
//         Price: ${product.price}
//     </li>
//     <li>
//         Description: {product.description};
//     </li>
// </ul>
//         </div>
//         <div className='col-1'>
//          <div className='card card-body'>
//             <ul>
//                 <li>
//                     <div className='row'>
//                         <div>Price</div>
//                         <div className='price'>${product.price}</div>
//                     </div>
//                 </li>
//                 <li>
//                     <div className='row'>
//                         <div>Status</div>
//                         <div>
//                         {product.countInStock>0? 
//                         (<span className="success"> In Stock </span>):(
//                         <span className='error'>Unavailable</span>)}
//                         </div>
//                     </div>
//                 </li>
//                 <li>
//                     <button className='primary block'>Add to Cart</button>
//                 </li>
//             </ul>
//          </div>
//         </div>
//       </div>
//     </div>
//   )
//}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
function ProductScreen() {
    const params = useParams();
    const { slug } = params;

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios(`/api/products/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, [slug]);
    return loading ? (
        <div>Loading...</div>
    ) : error ? (
        <div>{error}</div>
    ) : (
        <div>
            <h1><Link to="/">Back to result</Link></h1>
            <Row className='top'>
        <Col md={6}>
          <img
            className="img-large large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Pirce : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Size : {product.size}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        </div>
    );
}
export default ProductScreen;