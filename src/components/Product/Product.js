import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {

    const{name,img, price,stock,seller,star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    
    return (
        <div className = 'product'>
            <div className = 'product-image'>
               <img src={img} alt="" />
            </div>
            <div>
              <h4 className = 'product-name'>{name}</h4>
              <p>Price $: {price}</p>
              <p><small>by : {seller}</small></p><br />
              <p><small>only {stock} left in stock - order soon</small></p>
              <Rating  
              
              initialRating={star}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              /><br />
              <button className = 'btn-puchase' onClick = { ()=> props.handleAddToCart(props.product)}>{element}add to cart</button>
              
            </div>
        </div>
    );
};

export default Product;