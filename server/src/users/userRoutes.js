'use strict';

var userController = require('./userController');

module.exports = function (app) {

    app.route('/users/authenticate')
        .post(userController.authenticate);

    app.route('/users/register')
        .post(userController.register);

    app.route('/users/:username')
        .put((req, res) => {
            try {
                console.log(req)
                const { username } = req.params;
                userController.updateUser(username, req.body)
                    .then(user => {
                        res.status(200).send(user);
                    })
            } catch (error) {
                res.status(500).send({ message: "Error updating the user" })
            }
        });
}