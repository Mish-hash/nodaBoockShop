const express = require('express');
const {
    idBookScheme,
    bookBodyScheme
} = require('../yupSchemes/yupSchemes');

const {
    validateBody,
    valideteParams
} = require('../middlewares/validators');

const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/bookConroller');

const router = express.Router();

router.get('/book', getAllBooks);
router.get('/book/:id', valideteParams(idBookScheme), getBookById);
router.post('/book', validateBody(bookBodyScheme), createBook);
router.put('/book/:id', valideteParams(idBookScheme), validateBody(bookBodyScheme), updateBook);
router.delete('/book/:id', valideteParams(idBookScheme), deleteBook);

module.exports = router;
