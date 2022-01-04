var express = require('express');
var router = express.Router();
var session = require('express-session');



router.post('/', function(req, res) {
  require('../model/user.js');
  showAllUser(function(err, results){
    res.send(results);
  });
});
module.exports = router;
