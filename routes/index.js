const express = require('express');

const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
} = require('../controllers/bookConroller');

const router = express.Router();

router.get('/book', getAllBooks);
router.get('/book/:id', getBookById);
router.post('/book', createBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

module.exports = router;
