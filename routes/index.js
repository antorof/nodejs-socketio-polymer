var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Components' });
});
router.get('/prev', function(req, res, next) {
  res.render('index-prev', { title: 'Index - PREV' });
});

router.get('/:nombre', function(req, res, next) {
  res.render('index', { title: 'Express', nombre: req.params.nombre });
});

module.exports = router;
