import React from "react";
import axios from "axios";
import './stylesheets/insertBook.css'
import { useState, useEffect, useRef } from "react";
import Header from "./Header";

function InsertBook (props) {

    const filesElement = useRef(null);

    // Create field properties
    const [fields, setFields] = useState({
        title: '',
        author: '',
        genre: '',
        rating: '',
        image: ''
    });

    // Create function that change the field name through the input value 
    function handleImputChange(event) {
        if (event.target.name === 'image') {
            fields[event.target.name] = event.target.files[0];
        } else {
        fields[event.target.name] = event.target.value;
        setFields(fields);
        }        
    }

    // Create handle function that send post request to the server
    function handleFormSubmit(event) {
        event.preventDefault();
        send();
    }

    function send() {
        const formData = {};
        Object.assign(formData, {fields})
        axios.post('/products/create-book', fields, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        })
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
                    <input type="file" name="image" id="image" onChange={handleImputChange}></input>
                </div>

                <button type="submit" value='send'>Adicionar Livro</button>

            </form>

        </div>
    )
}

export default InsertBook;