import React, { useLayoutEffect } from "react";
import './stylesheets/bookList.css'
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import mao from "../Public/Images/mao-a-historia-desconhecida.jpg"

function BookList(props) {

    const [backEndData, setBackEndData] = useState([{}]);

    useEffect(() => {        
        axios.get('/products/get-books')
        .then(data => setBackEndData(data.data))        
    }, [])

    return (
        <div className="bookList">
            <Header/>
            <section className="containerBooks">
            {backEndData.map(book => <section key={backEndData.length + book.id}>
                    <div>
                        <a href={"#" + book.id}></a>
                        <img src= {URL.createObjectURL(book.image)} alt=''></img>
                    </div>
                    <h3> {book.title}  </h3>
                    <p>  </p>
                    <button>Adicionar ao Carrinho</button>

                </section>)}
            </section>
            
        </div>
    )
}

export default BookList;