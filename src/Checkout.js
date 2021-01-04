import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const[{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="amazon_ad.png" alt=""/>
            
                <div className="checkout_title">
                    <h3>Hello ,{user?.email}</h3>
                    <h2>Your Basket Here</h2>
                    {/*Checkout Product*/}
                    <h2>  
                        {basket.map(item => (
                        <CheckoutProduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                         />
                    ))}
                    </h2>

                    {/*Basket Item*/}
                    {/*Basket Item*/}
                    {/*Basket Item*/}


                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout
