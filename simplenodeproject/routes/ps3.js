const express = require('express');
const router = express.Router();



router.route('/')
        // res.render('ps3',
        //     {title: JSON.parse(response.body)})
        //     res.render('ps3', { title: 'Did this string show up?' });
        //     res.render('ps3', { title2: 'HELLOOOO?' });

    .get((req, res, next) => {
            console.log(`Got ${req.query.name} on ${req.url} with (${req.method})`)
            //res.render('ps3', {'string': 'Did this string show up?' });
            res.render('ps3', {'name': req.query.name, 'getReq':true})
    })
    .post((req, res, next) => {
            console.log(`Got ${req.body.name} on ${req.url} with (${req.method})`)
            res.render('ps3', {'name': req.body.name, 'length': req.body.name.length,
                    'postReq': true})
    })


module.exports = router;