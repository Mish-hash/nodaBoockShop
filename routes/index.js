const express = require('express');

const router = express.Router();

router.get('/book',() => {});
router.get('/book/:id',() => {});
router.post('/book', () => {});
router.put('./book/:id', () => {});
router.delete('book/id', () => {});

module.exports = router;
