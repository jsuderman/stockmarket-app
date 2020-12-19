import React from 'react';
import "./Header.css";
import Logo from "../../stocklogo.png";
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            {/* logo */}
            <div className="header__logo">
                <img 
                src={Logo}
                alt="stockmarket logo"
                />
            </div>
            {/* search */}
            <div className="header__search">
                <div className="header__searchContainer">
                    <input 
                    placeholder="Search a Stock"
                    type="text"
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    
                </div>
            </div>
            {/* menuitems */}
            <div className="header__menu">
                <a href="/">Portfolio</a>
                <a href="/">Cash</a>
                <a href="/">Messages</a>
                <a href="/">Account</a>
                <a href="/">Log Out</a>
                
            </div>
            
        </div>
    )
}

export default Header
