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
    const id = req.params.id;
    const book = books.find((book) => book.id === id);
    if(!book) {
        return res.sendStatus(400);
    }
    res.send(book);
};

function createBook(req, res) {
    const body = {
        id: idCreate++,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
    };
    books.push(body);
    res.send(body);
};

function updateBook(req, res) {
    const id = req.params.id;
    const body = {
        id: id,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
    };
    books = books.map((item) => {
        console.log(item);
        if(item.id === id) {
            return {...item, ...body};
        };
        return item;
    });
    res.send(body);
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
