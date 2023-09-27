'use strict';

// it is called when starting

var mongoose = require('mongoose');
var Club = mongoose.model('Club');
var User = mongoose.model('User');

module.exports.init = async function () {
    var nClubs = await Club.countDocuments();

    if (nClubs === 0) {
        createDefaultClubs();
    }
    createDefaultUsers();
}

async function createDefaultClubs() {
    for (var i = 1; i <= 100; i++) {
        var club = new Club();
        club.name = "Club " + i;
        club.image = "https://source.unsplash.com/random/400x600?sig=" + i;
        await club.save();
    }
    console.log("Create default clubs");
}

async function createDefaultUsers() {
    var defaultUser = new User();
    defaultUser.displayName = "john-doe";
    defaultUser.email = "john@doe@mail.com";
    defaultUser.username = "john-doe";
    defaultUser.password = "abc123."
    defaultUser.favouriteClubs = []

    const user = await User.findOne({ username: defaultUser.username })
    if (!user) {
        console.log("Create default clubs");
        return defaultUser.save()
    }
}