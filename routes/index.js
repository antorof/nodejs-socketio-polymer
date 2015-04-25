var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:nombre', function(req, res, next) {
  res.render('index', { title: 'Express', nombre: req.params.nombre });
});

module.exports = router;
