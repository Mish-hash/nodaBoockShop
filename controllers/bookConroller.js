let books = [
    {
        id: '1',
        title: 'Vatican Dungeons',
        author: 'Andre Gide',
        description: 'Classic prose',
    },
    {
        id: '2',
        title: 'Long-legged uncle',
        author: 'Gene Webster',
        description: 'Classic prose',
    },
    {
        id: '3',
        title: 'Bundori',
        author: 'Laura Joe Rowland',
        description: 'Historical detective',
    },
    {
        id: '4',
        title: 'City of Dreaming Books',
        author: 'Walter Moers',
        description: 'Fantasy',
    },
    {
        id: '5',
        title: '13 reasons why',
        author: 'Jay Asher',
        description: 'Modern prose',
    },
]

let idCreate = 6;

function getAllBooks(req, res) {
    console.log(books);
    res.send(books);
};

function getBookById(req, res) {

};

function createBook(req, res) {

};

function updateBook(req, res) {

};

function deleteBook(req, res) {

};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
