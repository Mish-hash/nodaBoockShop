const express = require('express');
const {
    idBookScheme,
    createBookBodyScheme,
    updateBookBodyScheme
} = require('../yupSchemes/yupSchemes');

const {
    validateBody,
    valideteParams,
    validateParamsBody,
} = require('../middlewares/validators');

const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
} = require('../controllers/bookConroller');

const router = express.Router();

router.get('/book', getAllBooks);
router.get('/book/:id', valideteParams(idBookScheme), getBookById);
router.post('/book', validateBody(createBookBodyScheme), createBook);
router.put('/book/:id', validateParamsBody(idBookScheme, updateBookBodyScheme), updateBook);
router.delete('/book/:id', valideteParams(idBookScheme), deleteBook);

module.exports = router;
