import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import './stylesheets/header.css'
import logo from '../Public/Images/logo.png'
import navigationIcon from '../Public/Images/navigation_icon.svg'
import searchIcon from '../Public/Images/search_icon.svg'
import cartIcon from '../Public/Images/cart_icon.svg'
import accountIcon from '../Public/Images/account_head.svg'

function Header (props) {

    const genresContainer = useRef();
    const bookGenres = useRef();
    const searchDiv = useRef();
    const carDiv = useRef();
    const accountDiv = useRef();


    const [backEndData, setBackEndData] = useState([{}]);

    useEffect(() => {        
        axios.get('/products/get-genres')
        .then(data => setBackEndData(data.data)
        )
    }, [])

    function showGenres () {

        if (bookGenres.current.style.display === '' || bookGenres.current.style.display === 'none') {
            genresContainer.current.className = 'genresContainer';
            genresContainer.current.style.height = '20%'
            bookGenres.current.style.display = 'flex';

            accountDiv.current.style.display = 'none';
            carDiv.current.style.display = 'none';
            searchDiv.current.style.display = 'none';
        } else {
            genresContainer.current.className = 'genresContainerHidden'
            bookGenres.current.style.display = 'none'

            accountDiv.current.style.display = 'none';
            carDiv.current.style.display = 'none';
            searchDiv.current.style.display = 'none';
        };
    }    

    function showSearch () {
        
        if (searchDiv.current.style.display === '' || searchDiv.current.style.display === 'none') {
            genresContainer.current.className = 'genresContainer';
            genresContainer.current.style.height = '5%'
            searchDiv.current.style.display = 'flex';

            accountDiv.current.style.display = 'none';
            carDiv.current.style.display = 'none';
            bookGenres.current.style.display = 'none';
        } else {
            genresContainer.current.className = 'genresContainerHidden'
            searchDiv.current.style.display = 'none'

            accountDiv.current.style.display = 'none';
            carDiv.current.style.display = 'none';
            bookGenres.current.style.display = 'none';
        };
    }

    function showCarDiv () { 
        if (carDiv.current.style.display === '' || carDiv.current.style.display === 'none') {
            genresContainer.current.className = 'genresContainer';
            genresContainer.current.style.height = '20%'
            carDiv.current.style.display = 'flex';

            accountDiv.current.style.display = 'none';
            bookGenres.current.style.display = 'none';
            searchDiv.current.style.display = 'none';
    } else {
            genresContainer.current.className = 'genresContainerHidden'
            carDiv.current.style.display = 'none'

            accountDiv.current.style.display = 'none';
            searchDiv.current.style.display = 'none';
            bookGenres.current.style.display = 'none';
    }
}

    function showAccountDiv () {
        if (accountDiv.current.style.display === '' || accountDiv.current.style.display === 'none') {
            genresContainer.current.className = 'genresContainer';
            genresContainer.current.style.height = '20%'
            accountDiv.current.style.display = 'flex';

            carDiv.current.style.display = 'none'
            bookGenres.current.style.display = 'none';
            searchDiv.current.style.display = 'none';
    } else {
            genresContainer.current.className = 'genresContainerHidden'
            accountDiv.current.style.display = 'none'

            carDiv.current.style.display = 'none';
            searchDiv.current.style.display = 'none';
            bookGenres.current.style.display = 'none';
    }
}


    return (
        <div className="headerDiv">
            <header> 
                <div className="logo">
                    <img src={logo} alt='logo' className="logoImage"></img>
                </div>
                <div className="itens">
                    <ul>
                        <li>
                            <a href="#header-nav" onClick={showGenres}>
                                <img src={navigationIcon} alt='navigation_icon'></img>
                            </a>                            
                        </li>

                        <li>
                            <a href="#header-search" onClick={showSearch}>
                                <img src={searchIcon} alt='search_icon'></img>
                            </a>
                        </li>

                        <li>
                            <a href="#header-car" onClick={showCarDiv}>
                                <img src={cartIcon} alt='car_icon'></img>
                            </a>
                        </li>
                        <li>
                            <a href="#header-account" onClick={showAccountDiv}>
                                <img src={accountIcon} alt='account_icon'></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>            
            <div className='genresContainerHidden' ref={genresContainer}>
                <ul className="bookGenres" ref={bookGenres}>
                    {backEndData.map(genre => <li key={backEndData.length + genre.id}><a key={genre.id} href={"#"+genre.name} className="bookGenre">{genre.name}</a></li>)}
                </ul>

                <div className="searchDiv" ref={searchDiv}>
                    <input id="search" type='text' className="inputSearch" placeholder="Buscar"></input>
                </div>

                <div className="carDiv" ref={carDiv}>                    
                    Nenhum produto no carrinho.            
                </div>

                <div className="accountDiv" ref={accountDiv}>
                    <a href="#Login" className="accountLink">Login</a>
                    <a href="#Favoritos" className="accountLink">Favoritos</a>
                    <a href="#minhaConta" className="accountLink">Minha Conta</a>
                </div>
            </div>            
        </div>
    )
}

export default Header;