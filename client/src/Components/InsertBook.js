import React from "react";
import './stylesheets/insertBook.css'
import { useState, useEffect, useRef } from "react";
import Header from "./Header";

function InsertBook (props) {


    return (
        <div className="insertBook">
            <Header/>

            <form action="" method="post">
                <div className="inputContainer">
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" id="title"></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor="genre">Gênero:</label>
                    <input type= "text" name="genre" id="genre"></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor="rating">Rating:</label>
                    <input type= "number" name="rating" id="rating" min="1" max="5"></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor="image">Imagem:</label>
                    <input type= "text" name="image" id="image"></input>
                </div>

                <button type="submit">Adicionar Livro</button>

            </form>

        </div>
    )
}

export default InsertBook;