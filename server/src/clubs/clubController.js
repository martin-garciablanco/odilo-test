'use strict';

var mongoose = require('mongoose');
const cache = require('../../cache');
var Club = mongoose.model('Club');

const CLUBS_CACHE_KEY = "clubs";
const CLUBS_CACHE_TTL = 300;

module.exports.list = function (req, res) {
    const clubsFromCache = cache.get(CLUBS_CACHE_KEY);
    clubsFromCache
        ? res.jsonp(clubsFromCache)
        : Club.find()
            .then(clubs => {
                cache.set(CLUBS_CACHE_KEY, clubs, CLUBS_CACHE_TTL)
                res.jsonp(clubs)
            })
            .catch(error => res.status(500).send({ message: error }));
}