const validateBodyTitle = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
        return res.status(400).json({message: "field 'title' is required "});
    }

    if (body.title === '') {
        return res.status(400).json({message: "title cannot be empty"});
    }

    if (body.status === undefined) {
        return res.status(400).json({message: "field 'status' is required "});
    }

    if (body.status === '') {
        return res.status(400).json({message: "status cannot be empty"});
    }

    next();
};

const validateBodyStatus = (req, res, next) => {
    const { body } = req;

    if (body.status === undefined) {
        return res.status(400).json({message: "field 'status' is required "});
    }

    if (body.status === '') {
        return res.status(400).json({message: "status cannot be empty"});
    }

    next();
};

module.exports = {
    validateBodyTitle, validateBodyStatus
};