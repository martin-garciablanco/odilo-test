'use strict';

var User = require('./userModel')

module.exports.authenticate = function (req, res) {
    User.findOne({ username: req.body.username, password: req.body.password })
        .then(u => {
            if (u) {
                res.jsonp(u);
            } else {
                res.status(500).send({ message: 'Username or password is incorrect' });
            }
        })
        .catch(error => res.status(500).send({ message: error }));
}

module.exports.register = function (req, res) {
    var user = new User(req.body);

    User.findOne({ username: user.username })
        .then(u => {
            if (u) {
                res.status(500).send({ message: 'Username "' + user.username + '" is already taken' });
            }
        });

    user.save()
        .then(u => res.jsonp(u))
        .catch(error => res.status(500).send({ message: error }));

}

module.exports.updateUser = function (username, { favouriteClubs, email, displayName }) {
    try {
        const query = { username: username };
        const options = { new: true };
        const userToUpdate = { favouriteClubs, email, displayName };
        return User.findOneAndUpdate(query, userToUpdate, options);
    } catch (error) {
        throw new Error(`Error updating the user, username: ${req.params.username} and body: ${JSON.stringify(req.body)}`);
    }
}