const yup = require('yup');

const idBookScheme = yup.number().positive().integer();

const bookBodyScheme = yup.object().shape({
    title: yup.string().trim(),
    author: yup.string().trim(),
    description: yup.string().trim()
});


module.exports = {
    idBookScheme,
    bookBodyScheme
};
