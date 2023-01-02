import React, { useLayoutEffect } from "react";
import './stylesheets/bookList.css'
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import mao from "../Public/Images/mao-a-historia-desconhecida.jpg"

function BookList(props) {

    const [backEndData, setBackEndData] = useState([{}]);

    useEffect(() => {        
        axios.get('/products/get-genres')
        .then(data => setBackEndData(data.data)
        )
    }, [])

    return (
        <div className="bookList">
            <Header/>
            <section className="containerBooks">
                <section>
                    <div>
                        <a href=" /produtos/produto/<%= result.id %> "></a>
                        <img src= {mao} alt=''></img>
                    </div>
                    <h3> produto.nome  </h3>
                    <p>  </p>
                    <button>Adicionar ao Carrinho</button>

                </section>
            </section>
            
            <h2>Lista de gêneros de livros:</h2>
            {console.log(backEndData)}
            {backEndData.map(genre => <h4 key={genre.id}>{genre.name}</h4>)}
            
        </div>
    )
}

export default BookList;