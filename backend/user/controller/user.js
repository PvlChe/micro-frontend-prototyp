const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    return User.find({}).then(data => {
        if (!data || data.length === 0) {
            const error = new Error('User couldnt be found!');
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

exports.getUser = (req, res, next) => {
    const id = req.params.id;
    return User.find({_id: id}).then(data => {
        if (!data || data.length === 0) {
            const error = new Error('User couldnt be found!');
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

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    return User.findOne({email}).then( user => {
        if(!user) {
            const error = new Error('email couldnt be found');
            error.status = 401;
            throw error;
        } else if (user.password !== password) {
            const error = new Error('wrong password');
            error.status = 401;
            throw error;
        } else {
            res.status(200);
            res.locals.items = user;
            res.locals.processed = true;
            next();
        }
    }).catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
    next();
};


exports.signUp = (req, res, next) => {
    const email = req.body.email;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;

    const user = new User({
        email,
        firstname,
        lastname,
        password
    });
    user.save().then( result => {
        res.status(201);
        res.locals.items = result;
        res.locals.processed = true;
        next();
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
