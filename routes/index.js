var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
});

module.exports = router;
