const Sequelize = require('sequelize')
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const Genre = db.Genre;
const Book = db.Book;

const controller = {};

// Get the genres of the database
controller.getGenres = async (req, res) => {
    const genres = await Genre.findAll();
    return res.json(genres);
}

// Create a new genre in the database
controller.createNewGenreForm = async (req, res) => {
    const { name } = req.body;

    const genre = await Genre.create({
        name
    })

    return res.json(genre);
}

// Create a new book in the database
controller.createNewBookForm = async (req, res) => {    
    const { title, author, genre } = req.body;

    await Genre.findAll({
        where: {
            name: {
                [Op.eq]: genre
            }
    }})
    .then(genreFinded => {
            if (genre === genreFinded[0].name) {
                const genre_id = genreFinded[0].id;  
                const book = Book.create({
                    title,
                    author,
                    genre,
                    genre_id      
                })
                res.json(book);   
    }})
    .catch(error => res.send(console.error('Gênero não encontrado')))
}

// Edit book in the database
controller.editBook = async (req, res) => {
    const { id } = req.params;

    await Book.findByPk(id)
    .then(book => {
        
    })
}

module.exports = controller;