import React from 'react';
import "./CheckoutProduct.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        //remove the item from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>
            <div className="checkoutProduct_info" >
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>BDT </small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct_rating">
                    {Array(rating).
                    fill().
                    map((_,i)=>(
                    <p><StarIcon/></p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from the button</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
