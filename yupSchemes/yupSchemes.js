const yup = require('yup');

const idBookScheme = yup.number().positive().integer();

const createBodyScheme = yup.object().shape({
    title: yup.string().trim().required(),
    author: yup.string().trim().required(),
    description: yup.string().trim().required()
});

const updateBodyScheme = yup.object().shape({
    title: yup.string().trim(),
    author: yup.string().trim(),
    description: yup.string().trim()
});


module.exports = {
    idBookScheme,
    createBodyScheme,
    updateBodyScheme
};
