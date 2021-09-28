import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() =>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        })
    },[]);

    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCard = [];
            for (const key in savedCart) {
              const addProduct = products.find(product => product.key === key);
              if(addProduct){
                  const quantity = savedCart[key];
                  addProduct.quantity = quantity;

              }
            storedCard.push(addProduct);

            }
            setCart(storedCard);
        }
    },[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);

        // save to localStorage for now
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <div>
            <div className = 'search-container'>
                <input onChange = {handleSearch} type="text" placeholder = 'search product'/>
            </div>

            <div className = 'shop-container'>
              <div className="product-container">
                {
                    displayProducts.map(product => <Product product = {product} key = {product.key} handleAddToCart = {handleAddToCart}></Product>)
                }
              </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;