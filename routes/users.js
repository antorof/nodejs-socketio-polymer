var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//router.get('/:nombre', function(req, res, next) {
//  res.render('index', { title: 'Express', nombre: req.params.nombre });
//});

module.exports = router;
