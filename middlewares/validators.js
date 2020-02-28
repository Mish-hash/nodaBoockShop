function valideteParams(validateScheme) {
    return function (req, res, next) {
        validateScheme.validate(req.params.id)
            .then(() => next())
            .catch(() => res.sendStatus(400))
    };
};

function validateBody(validateScheme) {
    return function(req, res, next) {
        validateScheme.validate(req.body)
            .then(() => next())
            .catch(() => res.sendStatus(400))
    };
};

function validateParamsBody(firstValidateScheme, secondValideteScheme) {
    return (function(req, res, next) {
        secondValideteScheme.validate(req.body)
            .then(() => {next()})
            .catch(() => res.sendStatus(400));

        firstValidateScheme.validate(req.params.id)
            .then(() => next())
            .catch(() => res.sendStatus(400));
    });
};

module.exports = {
    valideteParams,
    validateBody,
    validateParamsBody,
};
