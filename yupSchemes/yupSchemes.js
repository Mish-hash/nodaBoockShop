const yup = require('yup');

const idBookScheme = yup.namber().positive().integer();

const createBookBodyScheme = yup.object().shape({
    title: yup.string().required().trim(),
    author: yup.string().required().trim(),
    description: yup.string().required().trim()
});

const updateBookBodyScheme = yup.object().shape({
    id: yup.number().required().positive().integer(),
    title: yup.string().trim(),
    author: yup.string().trim(),
    description: yup.string().trim()
});

module.exports = {
    idBookScheme,
    createBookBodyScheme,
    updateBookBodyScheme,
};
