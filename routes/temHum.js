var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json(
      {'id':1,
      'nombre':'arequipa',
      'valor':'18'
    });
});

module.exports = router;

