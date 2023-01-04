const express = require('express');
const router = express.Router();
const controller = require('../controller/productsController');

router.get('/get-genres', controller.getGenres);
router.get('/get-books', controller.getBooks);
router.post('/create-book', controller.createNewBookForm);
router.post('/create-genre', controller.createNewGenreForm);
router.post('/edit-book/:id', controller.editBook);

module.exports = router; 