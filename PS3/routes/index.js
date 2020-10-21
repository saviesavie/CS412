const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/',
    function(req, res, next) {
  res.render('index', { title: 'CS412 PS3' });
});

// ~~~~~~~~~ NOTES FROM LECTURE ~~~~~~~~
// req = request object
// res = response object
// next = next function to run in a chain
router.get('/cs412',
    (req, res, next) => {
          res.send('hello in a GET');
})
router.post('/cs412', (req, res, next) => {
        res.send('hello in a POST');
})
router.get('/fx',
    (req, res, next) => {
        const options = {
            'method': 'GET',
            'url': 'http://apilayer.net/api/live?access_key=707d4d2111a1976c7c4bbd767a9bf3a6&currencies=EUR, GBP,JPY&format=',
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log('IN INDEX.JS: ',JSON.parse(response.body));
//        res.json(response.body);
            res.render('index',
                {title: JSON.parse(response.body)})
        });
    }

)

module.exports = router;
