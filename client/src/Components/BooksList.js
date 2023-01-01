import React from "react";
import './stylesheets/bookList.css'
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import mao from "../Public/Images/mao-a-historia-desconhecida.jpg"

function BookList(props) {

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
        </div>
    )
}

export default BookList;