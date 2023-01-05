const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const controller = require('../controller/productsController');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '..', 'public', 'images'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })


router.get('/get-genres', controller.getGenres);
router.get('/get-books', controller.getBooks);
router.post('/create-book', upload.single('image'), controller.createNewBookForm);
router.post('/create-genre', controller.createNewGenreForm);
router.post('/edit-book/:id', controller.editBook); 

module.exports = router; 