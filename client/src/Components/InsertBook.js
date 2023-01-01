import React from "react";
import './stylesheets/insertBook.css'
import { useState, useEffect, useRef } from "react";
import Header from "./Header";

function InsertBook (props) {

    const [fields, setFields] = useState({
        title: '',
        author: '',
        genre: '',
        rating: '',
        image: ''
    });

    function handleImputChange(event) {
        fields[event.target.name] = event.target.value;
        setFields(fields);
        
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(fields);
    }

    return (
        <div className="insertBook">
            <Header/>

            <form action="" method="post" onSubmit={handleFormSubmit}>
                <div className="inputContainer">
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" id="title" onChange={handleImputChange}></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor="author">Autor:</label>
                    <input type="text" name="author" id="author" onChange={handleImputChange}></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor="genre">Gênero:</label>
                    <input type= "text" name="genre" id="genre" onChange={handleImputChange}></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor="rating">Rating:</label>
                    <input type= "number" name="rating" id="rating" min="1" max="5" onChange={handleImputChange}></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor="image">Imagem:</label>
                    <input type= "text" name="image" id="image" onChange={handleImputChange}></input>
                </div>

                <button type="submit" value='send'>Adicionar Livro</button>

            </form>

        </div>
    )
}

export default InsertBook;