const Sequelize = require('sequelize')
const db = require('../database/models')
const sequelize = db.sequelize;
const {
    Op,
    where
} = require('sequelize');

const Genre = db.Genre;
const Book = db.Book;

const controller = {};

/* Get the genres of the database */
controller.getGenres = async (req, res) => {
    const genres = await Genre.findAll();
    return res.json(genres);
}

/* Get the books of the database */
controller.getBooks = async (req, res) => {
    const books = await Book.findAll();
    return res.json(books);
}

/* Update the selected book on the database */
controller.updateBook = async (req, res) => {
    const book = await Book.findByPk(req.params.id);

    const {
        title,
        author,
        genre,
        genreId,
        rating,
        image
    } = req.body;

    await Genre.findAll({
            where: {
                name: {
                    [Op.eq]: genre
                }
            }
        })
        .then(genreFinded => {
            if (genre === genreFinded[0].name) {
                const genreId = genreFinded[0].id;
                Book.update({
                    title,
                    author,
                    genre,
                    genreId,
                    rating,
                    image
                }, {
                    where: {
                        id: book.id
                    }
                });
            }
        })
}

/* Create a new genre in the database */
controller.createNewGenreForm = async (req, res) => {
    const {
        name
    } = req.body;

    const genre = await Genre.create({
        name
    })

    return res.json(genre);
}

/* Create a new book in the database */
controller.createNewBookForm = async (req, res) => {

    const {
        title,
        author,
        genre,
        rating
    } = req.body;

    /* Recovery all books */
    const books = await Book.findAll();

    /* Verify if the book exist */
    const bookExist = books.find(book => {book.title === title && book.author === author})

    // If the book isn't exist, execute the next function
    if (bookExist === undefined) {
        await Genre.findAll({
                where: {
                    name: {
                        [Op.eq]: genre
                    }

                }
            })
            .then(genreFinded => {
                console.log(genreFinded[0].name)
                if (genre === genreFinded[0].name) {
                    const genreId = genreFinded[0].id;
                    const book = Book.create({
                        title,
                        author,
                        genre,
                        genreId,
                        rating
                    })
                    res.json(book);
                }
            })
            .catch(error => res.send(console.error('Gênero não encontrado')))
    } else {
        res.send(console.log("O livro já existe"))
    }
}

// Edit book in the database
controller.editBook = async (req, res) => {
    const {
        id
    } = req.params;

    await Book.findByPk(id)
        .then(book => {

        })
}

module.exports = controller;