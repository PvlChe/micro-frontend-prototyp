const Order = require('../models/order');

exports.getOrders = (req, res, next) => {
    return Order.find({}).then(data => {
        if (!data || data.length === 0) {
            const error = new Error('Order couldnt be found!');
            error.statusCode = 401;
            throw error;
        }
        res.status(200);
        res.locals.items = data;
        res.locals.processed = true;
        next();
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
    next();
};

exports.getOrder = (req, res, next) => {
    const id = req.params.id;
    return Order.find({userID: id}).then(data => {
        if (!data || data.length === 0) {
            const error = new Error('Order couldnt be found!');
            error.statusCode = 404;
            throw error;
        }
        res.status(200);
        res.locals.items = data;
        res.locals.processed = true;
        next();
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
    next();
};

exports.saveOrder = (req, res, next) => {
    return Order.create(req.body).then(data => {
        if (!data || data.length === 0) {
            const error = new Error('Order couldnt be saved!');
            error.statusCode = 500;
            throw error;
        }
        res.status(201);
        res.locals.items = data;
        res.locals.processed = true;
        next();
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
    next();
};
