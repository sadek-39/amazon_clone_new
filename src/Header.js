import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DehazeIcon from '@material-ui/icons/Dehaze';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user},dispatch]=useStateValue();
    function handleAuthentication(){
        if(user){
            auth.signOut()
        }
    }
    return (
        <div className="header">
            <div className="nav_icon">
                <DehazeIcon/>

            </div>
            <Link to='/'>
                <img src="Logo.jpg" class="logo-img" alt=""/>

            </Link>
            
            <div className="header-search">
                <input className="header-searchInput" type="text"></input>
                <SearchIcon className="header-searchIcon"/>
            </div>
            <div className="header-nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header-option">
                            <span className="header-optionLineOne">Hello Guest</span>
                        <Link to="/login">
                            <span className="header-optionLineSecond">{user?'Sign out':'Sign in'}</span>
                        </Link>
                    </div>
                </Link>
                <div className="header-option">
                    <span className="header-optionLineOne">Returns</span>
                    <span className="header-optionLineSecond">&Orders</span>
                </div>

                <div className="header-option">
                    <span className="header-optionLineOne">Your</span>
                    <span className="header-optionLineSecond">Prime</span>    
                </div>

            </div>
            <Link to='/checkout'> 
                <div className="option-Basket">
                    <ShoppingBasketIcon/>
            <span className="header-optionLineSecond header-BasketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
