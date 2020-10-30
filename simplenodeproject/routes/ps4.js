const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/fetchConfigs');

router.route('/')
    .post( (req, res, next) => {
        doRequest(req.body.artist)
            .then(cleanData => {
                res.render('ps4',{'artist': req.body.artist, 'trackName': cleanData.results[0].trackName,
                    'releaseDate': cleanData.results[0].releaseDate, 'collectionName': cleanData.results[0].collectionName});
        });
    })

const doRequest = async value => {
    let rawData = await fetch(CONFIG.fetchOptions.url + value);
    let cleanData = await rawData.json();
    return cleanData;
};

module.exports = router;