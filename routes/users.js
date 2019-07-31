var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('The best way to transfer your enterprise information');
});

module.exports = router;
