const yup = require('yup');

const idBookScheme = yup.number().positive().integer();

const bookBodyScheme = yup.object().shape({
    title: yup.string().trim().required(),
    author: yup.string().trim().required(),
    description: yup.string().trim().required()
});


module.exports = {
    idBookScheme,
    bookBodyScheme
};
