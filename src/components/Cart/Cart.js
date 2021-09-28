import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{cart} = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        console.log(product);
        if(!product.quantity){
            product.quantity  = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;

    }
    
    let shippingCost = total > 0? 15 * props.cart.length : 0;
    const tax = (total + shippingCost) * 0.10;
    const grandTotal = total + shippingCost + tax;


    return (
        <div>
            <div>
                <h3>Order Summary</h3>
            </div>

            <div className = "purchase">
            <h4>Items orders : {totalQuantity}</h4>
              <p>Total: {total}</p>
              <p>Shipping : {shippingCost}</p>
              <p>Tax : {tax}</p>
              <p>Grand-Total : {grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;