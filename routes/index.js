const express = require('express');
const {
    idBookScheme,
    createBodyScheme,
    updateBodyScheme
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
router.post('/book', validateBody(createBodyScheme), createBook);
router.put('/book/:id', valideteParams(idBookScheme), validateBody(updateBodyScheme), updateBook);
router.delete('/book/:id', valideteParams(idBookScheme), deleteBook);

module.exports = router;
