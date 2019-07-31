var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json({'id':1,
              'sede':'areq',
              'temp':'25',
              'humed':'58',
              'fecha':'31-07-2019',
              'hora':'18:25:55 0.8954210'      
            });
});

module.exports = router;

