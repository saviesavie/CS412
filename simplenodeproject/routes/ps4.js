const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/fetchConfigs');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((error, response) => {
    if (error) {
        throw new Error('something bad happened when I flushed')
    }
});

router.route('/')
    .post( async (req, res, next) => {
        // gets artist name
        let artist = req.body.artist;
        // check cache
        let match = await asyncExists(artist);
        // if in cache, return
        if (match) {
            let artistData = await asyncGet(artist);
            let response = {
                artistData: artistData,
                cached: true
            }
            res.send(response);
        }
        // if not in cache, set in cache and return
        else {
            let rawData = await fetch(CONFIG.fetchOptions.url + artist);
            let cleanData = await rawData.json();
            let ret = cleanData.results[0].trackName;
            let status = await asyncSet(artist, ret);
            status = await asyncExpire(artist, 15);
            let response = {
                artistTrack: ret,
                cached: false
            }
            res.send(response)
        }
        // doRequest(req.body.artist)
        //     .then(cleanData => {
        //         res.render('ps4',{'artist': req.body.artist, 'trackName': cleanData.results[0].trackName,
        //             'releaseDate': cleanData.results[0].releaseDate, 'collectionName': cleanData.results[0].collectionName});
        // });
    });

// const doRequest = async value => {
//     let rawData = await fetch(CONFIG.fetchOptions.url + value);
//     let cleanData = await rawData.json();
//     return cleanData;
// };

module.exports = router;