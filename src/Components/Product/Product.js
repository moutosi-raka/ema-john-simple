import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = props => {
    const {name,price,ratings,seller,img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p>Price: ${price}</p>
           <p><small>Manufacturer :{seller}</small></p>
           <p><small>Rating: {ratings} star</small></p>
           </div>
           <button onClick={()=> props.handlerToCart(props.product)} className='cart-btn'>
            <p className='cart-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;