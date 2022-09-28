import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handlerToCart = product =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handlerToCart={handlerToCart}
                        ></Product>)
                }
            </div>
            <div className="order-container">
                <h2>Order Summary</h2>

                <div className='order-info'>
                    <p>Selected Item: {cart.length}</p>
                    <p>Total Price: {}</p>
                    <p>Total Shopping Charge: ${}</p>
                    <p>Text: ${}</p>
                    <h3>Grand Total: {}</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;